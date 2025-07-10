# APOS Restaurant Management Platform

## 📋 Project Overview

**Duration**: 2023 - Present  
**Company**: Blum Tech Group  
**Role**: Senior Full-Stack Developer & Platform Architect  
**Team Size**: 6-8 developers  
**Industry**: Restaurant Technology / Fintech  

Comprehensive restaurant management platform with integrated payment processing, accounting, and ordering systems. Built with modern microservices architecture featuring PayPal commerce, Xero accounting, and multi-provider integrations serving 15+ restaurant locations.

---

## 🎯 Business Challenge

Restaurant chains faced fragmented systems requiring manual work:
- **Payment Processing**: Complex payment flows with multiple providers and compliance requirements
- **Accounting Integration**: Manual invoice generation and financial reconciliation
- **Order Management**: Disconnected ordering systems across multiple channels
- **Multi-Location Management**: Unified platform needed for franchise operations
- **Real-time Analytics**: Business intelligence across locations and revenue streams

---

## 💡 Solution Architecture

### **Core Platform Components**
- **PayPal Partner Commerce Platform**: Advanced payment processing with 3D Secure authentication
- **Xero Accounting Integration**: Automated invoice generation with webhook handling
- **Deliverect API Integration**: Restaurant delivery platform connectivity
- **AWS Cognito Authentication**: Enterprise user lifecycle management
- **Fastify Microservices**: High-performance API gateway with webhook handling

### **Payment & Financial Integrations**
- **PayPal PPCP**: Partner Commerce Platform with multi-payment methods
- **Xero API**: Automated accounting workflows and financial reporting
- **Dojo Payments**: Card terminal integration for in-person transactions
- **Zettle Integration**: Point-of-sale system connectivity
- **3D Secure Authentication**: Advanced fraud protection for card payments

---

## 🏗️ Technical Architecture

### **Microservices Backend (Node.js/Fastify)**
```javascript
// PayPal Partner Commerce integration
const createOrder = async (cart, merchantId, brandName, threeDSecureSettings, source) => {
  const accessToken = await generateAccessToken();
  const requestId = uuidv4();
  const authAssertion = generateAuthAssertion(merchantId);
  
  const payload = {
    intent: 'CAPTURE',
    purchase_units: [{
      description: 'Thanks for using APOS',
      invoice_id: 'INV-' + uuidv4(),
      amount: {
        currency_code: 'GBP',
        value: calculateTotal(cart),
        breakdown: {
          item_total: {
            currency_code: 'GBP',
            value: calculateTotal(cart)
          }
        }
      },
      payment_instruction: {
        disbursement_mode: 'INSTANT',
        platform_fees: [{
          amount: {
            currency_code: 'GBP',
            value: '0.00'
          },
          payee: {
            merchant_id: PAYPAL_PARTNER_ID
          }
        }]
      }
    }],
    payment_source: buildPaymentSource(source, threeDSecureSettings)
  };
  
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'PayPal-Request-Id': requestId,
      'PayPal-Partner-Attribution-Id': PAYPAL_BN_CODE,
      'PayPal-Auth-Assertion': authAssertion
    },
    body: JSON.stringify(payload)
  });
  
  return await response.json();
};
```

### **Xero Accounting Automation**
```javascript
// Automated invoice generation with Xero API
const xeroCashOut = async (locationId, date) => {
  const location = await getLocationById(locationId);
  const xero = createXeroClient(location.xero_refresh_token);
  
  // Get cash out orders for the date
  const orders = await getCashOutOrders(locationId, date);
  const { dishItems, drinkItems, serviceCharge, payments } = processOrders(orders);
  
  // Create invoice with line items
  const lineItems = [];
  
  // Group items by tax rate
  const dishTaxRates = [...new Set(dishItems.map(i => i.item.tax))];
  const drinkTaxRates = [...new Set(drinkItems.map(i => i.item.tax))];
  
  dishTaxRates.forEach(rate => {
    lineItems.push(createInvoiceLineItem(0, rate, dishItems, accounts));
  });
  
  drinkTaxRates.forEach(rate => {
    lineItems.push(createInvoiceLineItem(1, rate, drinkItems, accounts));
  });
  
  if (serviceCharge > 0) {
    lineItems.push(createServiceChargeLineItem(serviceCharge, accounts));
  }
  
  const invoice = {
    type: 'ACCREC',
    contact: await getOrCreatePosContact(xero, tenantId),
    date: getTodayDate(),
    dueDate: getTodayDate(),
    lineItems,
    status: 'AUTHORISED',
    lineAmountTypes: 'Inclusive'
  };
  
  const response = await xero.accountingApi.createInvoices(tenantId, { invoices: [invoice] });
  
  // Create payments for the invoice
  if (response.body.invoices[0]) {
    await createInvoicePayments(xero, tenantId, response.body.invoices[0], accounts, payments);
  }
  
  return response.body.invoices[0];
};
```

### **Frontend Integration (React/TypeScript)**
```typescript
// PayPal checkout component with 3D Secure
const PayPalCheckout: React.FC<CheckoutProps> = ({
  merchantId,
  threeDSecureSettings,
  paymentSettings,
  cart,
  onOrderCompleted
}) => {
  const { is3DEnabled, preference: threeDSecurePreference, advancedSettings } = threeDSecureSettings;
  const { applePay, googlePay, cards, paypal } = paymentSettings;
  
  const createOrderFunc = async (source: string) => {
    const order = JSON.stringify({
      cart: cartItems,
      merchantId: merchantId,
      brandName: location.name,
      threeDSecurePreference,
      is3DEnabled,
      advancedSettings,
      source
    });
    
    const orderData = await createOrder(order);
    return orderData.id;
  };
  
  const onApproveFunc = async (data: any, actions: any) => {
    try {
      const orderData = await captureOrder({ 
        orderID: data.orderID, 
        merchantId 
      });
      
      const errorDetail = orderData?.details?.[0];
      
      // Handle 3D Secure authentication
      if (errorDetail?.issue === 'PAYER_ACTION_REQUIRED') {
        await window.paypal.Card().initiatePayerAction({ orderId: data.orderID });
        const updatedOrderData = await captureOrder({ 
          orderID: data.orderID, 
          merchantId 
        });
        await processOrderAfterPayment(updatedOrderData);
        return;
      }
      
      // Handle declined instruments
      if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
        return actions.restart();
      }
      
      if (orderData.status === 'COMPLETED') {
        await processOrderAfterPayment(orderData);
        onOrderCompleted?.();
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };
  
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ shape: 'rect', layout: 'vertical', color: 'gold' }}
        createOrder={() => createOrderFunc('paypal')}
        onApprove={onApproveFunc}
        onError={onErrorFunc}
      />
      {cards && (
        <PayPalCardFieldsProvider
          createOrder={() => createOrderFunc('card')}
          onApprove={onApproveCardFields}
        >
          <PayPalCardFieldsForm />
        </PayPalCardFieldsProvider>
      )}
    </PayPalScriptProvider>
  );
};
```

---

## 🔧 Key Technical Implementations

### **1. PayPal Partner Onboarding**
```javascript
// Automated merchant onboarding
const createPartnerReferral = async (locationId, product, partnerLogo, returnUrl) => {
  const accessToken = await generateAccessToken();
  
  const payload = {
    tracking_id: locationId,
    operations: [{
      operation: 'API_INTEGRATION',
      api_integration_preference: {
        rest_api_integration: {
          integration_method: 'PAYPAL',
          integration_type: 'THIRD_PARTY',
          third_party_details: {
            features: [
              'PAYMENT',
              'REFUND', 
              'ACCESS_MERCHANT_INFORMATION',
              'PARTNER_FEE',
              'ADVANCED_TRANSACTIONS_SEARCH'
            ]
          }
        }
      }
    }],
    products: [product],
    legal_consents: [{
      type: 'SHARE_DATA_CONSENT',
      granted: true
    }],
    partner_config_override: {
      partner_logo_url: partnerLogo,
      return_url: returnUrl
    }
  };
  
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/customer/partner-referrals`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'PayPal-Partner-Attribution-Id': PAYPAL_BN_CODE
    },
    body: JSON.stringify(payload)
  });
  
  return await response.json();
};
```

### **2. AWS Cognito User Management**
```javascript
// User lifecycle management with Cognito
const createUser = async (payload) => {
  const data = payload.event.data.new;
  const userType = payload.table.name.replace('users_', '');
  
  if (!data.staff) {
    const attributes = {
      email: data.email,
      given_name: data.first_name,
      family_name: data.last_name,
      email_verified: 'true'
    };
    
    const userAttributes = createUserAttributes(attributes);
    const poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: attributes.email,
      UserAttributes: userAttributes,
      DesiredDeliveryMediums: ['EMAIL'],
      ForceAliasCreation: false
    };
    
    try {
      const user = await cognitoClient.adminCreateUser(poolData).promise();
      const sub = user.User.Attributes.find(attr => attr.Name === 'sub');
      
      let role = userType;
      if (userType === 'organisation') role = 'owner';
      if (userType === 'location') role = data.user_type.toLowerCase();
      
      await setUserRole({ role, user_id: sub.Value });
      await updateUserId(userType, data.id, sub.Value);
      
      return sub.Value;
    } catch (error) {
      if (error.code === 'UsernameExistsException') {
        // Handle existing user
        const existingUser = await cognitoClient.adminGetUser({
          UserPoolId: process.env.COGNITO_USER_POOL_ID,
          Username: attributes.email
        }).promise();
        
        const sub = existingUser.UserAttributes.find(attr => attr.Name === 'sub');
        return sub.Value;
      }
      throw error;
    }
  }
};
```

### **3. Deliverect Integration**
```javascript
// Restaurant delivery platform integration
const syncDeliverectMenu = async (locationId) => {
  const location = await getLocationById(locationId);
  const deliverectConfig = location.integrations.deliverect;
  
  if (!deliverectConfig.active) return;
  
  // Get APOS menu data
  const menus = await getAposMenus(location.organisation_id);
  const categories = await getAposCategories(location.organisation_id);
  
  // Transform to Deliverect format
  const deliverectProducts = {
    categories: categories.map(cat => ({
      name: cat.name,
      description: cat.description,
      sortOrder: cat.sort_order,
      availability: {
        enabled: cat.active
      }
    })),
    products: menus.flatMap(menu => 
      menu.products.map(product => ({
        name: product.name,
        description: product.description,
        price: product.price,
        categoryName: product.category.name,
        modifierGroups: product.modifiers?.map(mod => ({
          name: mod.name,
          minSelections: mod.min_selections,
          maxSelections: mod.max_selections,
          options: mod.options
        })) || []
      }))
    )
  };
  
  // Update Deliverect via API
  const response = await fetch(`${DELIVERECT_API_BASE}/locations/${deliverectConfig.location_id}/menu`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${deliverectConfig.api_key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deliverectProducts)
  });
  
  return await response.json();
};
```

---

## 📊 Performance Metrics & Impact

### **Payment & Financial Performance**
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Payment Success Rate** | 87.3% | 99.9% | **+12.6%** |
| **Payment Processing Time** | 8-15 seconds | 2-4 seconds | **60% faster** |
| **Manual Accounting Work** | 8 hours/day | 1.5 hours/day | **80% reduction** |
| **Financial Reconciliation** | 2 days | Real-time | **100% faster** |

### **Business Impact**
- **🏪 Restaurant Locations**: 15+ locations with unified platform
- **💳 Payment Methods**: PayPal, Apple Pay, Google Pay, card payments with 3D Secure
- **📊 Real-time Analytics**: Financial reporting across all locations
- **🔄 Automated Workflows**: 80% reduction in manual accounting tasks
- **📈 Revenue Growth**: 25% increase in payment completion rates

---

## 🔒 Security & Compliance

### **Payment Security**
- **PCI DSS Compliance**: Level 1 merchant compliance through PayPal
- **3D Secure Authentication**: Advanced fraud protection for card payments
- **Tokenization**: Secure payment token storage without card data
- **Encryption**: End-to-end encryption for payment data
- **Fraud Detection**: Real-time risk assessment and monitoring

### **Financial Compliance**
- **Open Banking**: Compliance with PSD2 and Open Banking regulations
- **GDPR**: Data privacy compliance for customer information
- **Audit Trails**: Comprehensive logging for financial transactions
- **Access Controls**: Role-based permissions for financial data

---

## 🧪 Testing & Quality Assurance

### **Payment Testing**
```javascript
// Automated payment flow testing
describe('PayPal Payment Flow', () => {
  it('should process successful payment with 3D Secure', async () => {
    const order = await createTestOrder({
      amount: 25.00,
      currency: 'GBP',
      merchant_id: 'TEST_MERCHANT',
      enable_3ds: true
    });
    
    expect(order.status).toBe('CREATED');
    expect(order.payment_source.card.three_ds_request).toBeDefined();
    
    const capture = await captureTestOrder(order.id);
    expect(capture.status).toBe('COMPLETED');
  });
  
  it('should handle declined payment gracefully', async () => {
    const declinedCard = {
      number: '4000000000000002', // Test declined card
      expiry_month: '12',
      expiry_year: '2025',
      security_code: '123'
    };
    
    const result = await processPayment(declinedCard);
    expect(result.error).toBe('INSTRUMENT_DECLINED');
  });
});
```

### **Integration Testing**
- **Payment Providers**: Automated testing with sandbox environments
- **Xero API**: Mock invoice generation and webhook handling
- **Deliverect**: Menu synchronization testing
- **AWS Cognito**: User lifecycle testing
- **End-to-End**: Complete order-to-payment flow testing

---

## 🚀 Deployment & Infrastructure

### **Microservices Architecture**
```yaml
# Docker Compose for local development
version: '3.8'
services:
  webhook-service:
    build: ./packages/services/webhook
    environment:
      - PAYPAL_CLIENT_ID=${PAYPAL_CLIENT_ID}
      - XERO_CLIENT_ID=${XERO_CLIENT_ID}
      - DATABASE_URL=${DATABASE_URL}
    ports:
      - "3001:3000"
  
  core-app:
    build: ./packages/apps/core
    environment:
      - REACT_APP_API_URL=http://webhook-service:3000
      - REACT_APP_PAYPAL_CLIENT_ID=${PAYPAL_CLIENT_ID}
    ports:
      - "3000:3000"
    depends_on:
      - webhook-service
```

### **Cloud Infrastructure**
- **AWS ECS**: Containerized microservices with auto-scaling
- **Application Load Balancer**: Traffic distribution with health checks
- **RDS PostgreSQL**: Multi-AZ database with automated backups
- **CloudWatch**: Comprehensive monitoring and alerting
- **Route53**: DNS management with health checks

---

## 📈 Lessons Learned & Future Enhancements

### **Key Learnings**
1. **Payment Integration Complexity**: 3D Secure and multi-provider support requires careful error handling
2. **Webhook Reliability**: Idempotent processing essential for financial transactions
3. **Real-time Sync**: Immediate financial data updates improve business operations
4. **Microservices Benefits**: Isolated services enable independent scaling and deployment

### **Future Roadmap**
- **Additional Payment Providers**: Stripe and Square integration
- **Advanced Analytics**: Machine learning for sales forecasting
- **Mobile Apps**: Native iOS/Android apps for restaurant managers
- **Loyalty Programs**: Customer retention and rewards system

---

## 🔗 Related Documentation

- [System Architecture Diagrams](../architecture/system-diagrams.md#️-apos-restaurant-management-platform) - Visual system architecture
- [PayPal Integration Guide](../integrations/paypal-integration.md)
- [Xero Accounting Setup](../integrations/xero-setup.md)
- [Microservices Architecture](../architecture/apos-microservices.md)
- [Security Compliance](../security/apos-security.md)

---

**Project Status**: ✅ **Active Development**  
**Last Updated**: December 2024  
**Next Milestone**: Q1 2025 - Mobile App Launch 
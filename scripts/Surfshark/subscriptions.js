var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "expiresAt": "2099-12-20T20:40:25+00:00",
  "upgradable": true,
  "recurringFrequency": 12,
  "productPlanId": "70101326-6cde-4328-ac99-61683a331ada",
  "packageId": "1d1792a2-48c2-44a9-8c97-ea7b917723c8",
  "name": "12 months",
  "frequency": 12,
  "frequencyUnit": "month",
  "startingBonus": 0,
  "displayFrequency": 0,
  "status": "active",
  "type": "normal",
  "renewable": false,
  "orders": [
    {
      "taxCountry": null,
      "regionName": null,
      "zipCode": null,
      "taxPercentage": 0.0,
      "price": {
        "amount": 5499,
        "currency": {
          "code": "USD"
        }
      },
      "tax": {
        "amount": 0,
        "currency": {
          "code": "USD"
        }
      },
      "expiresAt": "2099-12-22T14:40:29+00:00",
      "nextPaymentDetails": {
        "paymentProvider": {
          "id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
          "code": "apple_store",
          "isActive": true,
          "name": "AppleStore",
          "setupConfig": {
            "appId": "com.surfshark.vpnclient.ios"
          },
        },
        "paymentToken": "90001814624358",
        "scheme": "apple_store",
        "cardType": null,
        "cardLastNumber": null,
        "cardExpiredYear": null,
        "cardExpiredMonth": null,
        "email": null,
        "createdAt": "2023-12-13T14:40:29+00:00",
        "updatedAt": "2023-12-13T14:40:30+00:00"
      },
      "changedPaymentDetails": false,
      "paymentProvider": {
        "id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
        "code": "apple_store",
        "isActive": true,
        "name": "AppleStore",
        "setupConfig": {
          "appId": "com.surfshark.vpnclient.ios"
        },
      },
      "paymentDetails": {
        "paymentProvider": {
          "id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
          "code": "apple_store",
          "isActive": true,
          "name": "AppleStore",
          "setupConfig": {
            "appId": "com.surfshark.vpnclient.ios"
          },
        },
        "paymentToken": "90001814624358",
        "scheme": "apple_store",
        "cardType": null,
        "cardLastNumber": null,
        "cardExpiredYear": null,
        "cardExpiredMonth": null,
        "email": null,
        "createdAt": "2023-12-13T14:40:29+00:00",
        "updatedAt": "2023-12-13T14:40:30+00:00"
      },
      "upgrade": false,
      "originalOrderId": null,
      "frequency": 12,
      "frequencyUnit": "month",
      "trial": false,
      "status": "pending",
      "orderIntent": {
        "type": "init_default",
        "items": []
      },
      "invoiceNumber": null,
      "invoiceBusiness": false,
      "customerId": "96d12964-0ae8-4331-bb2f-068f27b4c97f",
      "id": "7c78494d-e0ca-49c4-b23d-bdb87f71515c",
      "createdAt": "2023-12-13T14:40:29+00:00",
      "updatedAt": "2023-12-13T14:40:29+00:00"
    }
  ],
  "promotable": false,
  "source": "vpn",
  "paymentDetails": null,
  "customerId": "96d12964-0ae8-4331-bb2f-068f27b4c97f",
  "id": "d32fd068-8091-4c3d-9b5c-327072933369",
  "createdAt": "2023-12-13T14:40:29+00:00",
  "updatedAt": "2023-12-13T14:40:40+00:00",
}
body = JSON.stringify(obj);
$done({body: body});

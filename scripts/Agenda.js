var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "isSubscribed": true,
  "informUserOfPendingBonus": false,
  "universalPurchaseAvailable": true,
  "licenseStatusMobile": 1,
  "error": 0,
  "freeTrialStatus": 1,
  "licenseStatus": 1,
  "isSubscribedMobile": true,
  "unlockExpiry": 4099780536,
  "hasLifetimeUnlock": true,
  "unlockExpiryMobile": 4099780536
};

body = JSON.stringify(obj);
$done({body: body});
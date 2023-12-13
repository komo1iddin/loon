var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "subscriber": {
    "subscriptions": {
      "laoshi.1y.usd.trial": {
        "expires_date": "2099-12-19T16:05:32Z",
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "period_type": "normal",
        "purchase_date": "2023-12-12T16:05:32Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
      }
    },
    "entitlements": {
      "laoshi_plus": {
        "purchase_date": "2023-12-12T16:05:32Z",
        "product_identifier": "laoshi.1y.usd.trial",
        "expires_date": "2099-12-19T16:05:32Z"
      },
      "laoshi_hanzi_course": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-12-12T16:05:32Z",
        "product_identifier": "laoshi.1y.usd.trial",
        "expires_date": "2099-12-19T16:05:32Z"
      }
    },
  }
}
body = JSON.stringify(obj);
$done({body: body});

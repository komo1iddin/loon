var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "request_date_ms": 1703060773697,
  "request_date": "2023-12-20T08:26:13Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-09-11T02:36:06Z",
    "original_application_version": "4951632316",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "laoshi.1y.usd.trial": {
        "original_purchase_date": "2023-12-12T16:05:33Z",
        "expires_date": "2099-12-19T16:05:32Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "unsubscribe_detected_at": null,
        "period_type": "normal",
        "purchase_date": "2023-12-12T16:05:32Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "90001813668343"
      }
    },
    "entitlements": {
      "laoshi_plus": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-12-12T16:05:32Z",
        "product_identifier": "laoshi.1y.usd.trial",
        "expires_date": "2099-12-19T16:05:32Z"
      },
      "laoshi_hanzi_course": {
        "grace_period_expires_date": null,
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

var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "subscriptions": [
    {
      "subscription_state": "ACTIVE",
      "subscription_name": "Scan Premium V1: 9.99mo - 29.99yr",
      "biz_source": "",
      "billing_term": null,
      "sub_ref": "",
      "subscription_level": "1"
    }, 
  ]
}
body = JSON.stringify(obj);
$done({body: body});
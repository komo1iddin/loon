var body = $response.body;
var obj = JSON.parse(body);

var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "id": 180475,
  "billing_interval": "yearly",
  "limits": {
    "seats": 1,
    "attachment_storage": 100000000000,
    "active_objectives": 75,
    "active_opportunities": null,
    "active_projects": null,
    "history_months": null,
    "history_limit_date": null
  },
  "attachment_storage_used": 0,
  "period_end_date": "2099-11-16T16:13:57.416231+00:00",
  "product": "business",
  "provider": "direct",
  "status": "paid",
  "plan_id": "com.marketcircle.daylite.2.y.business.objA0.seatA0",
  "visible_limits": [
    "opportunities",
    "projects",
    "objectives",
    "seats"
  ]
};
body = JSON.stringify(obj);
$done({body: body});

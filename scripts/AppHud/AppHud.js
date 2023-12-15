let body = JSON.parse($response.body)
let index = 0
for(let i = 0; i < body["data"]["results"][["paywalls"]][0]["items"].length; i++) {
  if(body["data"]["results"][["paywalls"]][0][["items"]][i]["product_id"].search(/(life\.?|one\.?)time/) != -1) {
    index = i
    break
  }
}
let product_id = body.data.results.paywalls[0].items[index].product_id
body.data.results.subscriptions = [{"id":"31566ab9-6b3d-4441-bca1-82e9241270bf","unit":"year","group_id":"c0c4beb3","autorenew_enabled":!0,"expires_at":"2099-09-09T20:20:20.000Z","in_retry_billing":!1,"introductory_activated":!0,"cancelled_at":null,"platform":"ios","product_id":product_id,"retries_count":0,"started_at":"2023-09-18T20:23:02.000Z","local":!1,"next_check_at":"2099-09-09T20:20:20.000Z","kind":"autorenewable","units_count":1,"environment":"production","status":"regular"}]
$done({body: JSON.stringify(body)})
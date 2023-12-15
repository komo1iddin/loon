let body = JSON.parse($request.body)
if(typeof body.need_paywalls != "undefined") {
  body.need_paywalls = true
}
else{
  body={"sdk_version":"2.8.8","bundle_id":body.bundle_id,"device_family":"iPhone","user_id":body.user_id,"app_version":"1.9.8","need_paywalls":!0,"is_new":!1,"device_id":body.device_id,"request_id":body.request_id,"locale":"ru_RU","platform":"iOS","start_app_version":"1.9.8","is_debug":!1,"idfv":"5CEBB710-AD86-40C6-A2AE-78A82F8CC44B","os_version":"16.1.1","time_zone":"Europe/Moscow","country_iso_code":"RU","api_key":body.api_key,"device_type":"iPhone11,8","first_seen":1697235526}
}
$done({body: JSON.stringify(body)})
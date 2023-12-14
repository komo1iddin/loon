var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "secured": true,
  "torrent": true,
  "restricted": false
}
body = JSON.stringify(obj);
$done({body: body});

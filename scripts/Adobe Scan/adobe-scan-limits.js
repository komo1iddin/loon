var body = $response.body;
var obj = JSON.parse(body);
obj = 
{
  "acrobat_pro": true,
  "acrobat_std": true
}
body = JSON.stringify(obj);
$done({body: body});
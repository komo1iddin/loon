var body = $response.body;
var obj = JSON.parse(body);

obj.productIDs = [
  "scanner_lopofist_1week_6_99_7D"
];

body = JSON.stringify(obj);
$done({body: body});
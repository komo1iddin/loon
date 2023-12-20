var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "premiumPlatform": "IOS",
  "thirdLanguage": -1,
  "lastName": "Fatxullayev",
  "facebookId": null,
  "id": "19753526",
  "country": 235,
  "yearOfBirth": -1,
  "premiumPlanType": "Monthly",
  "firstName": "Komoliddin",
  "InterfaceLanguage": 1049,
  "subscriptionDate": "2023-12-12T15:52:42.988649",
  "secondLanguage": -1,
  "premiumSubscriptionDate": "2099-12-19T15:52:27",
  "uniqueId": "3cd1d9c8-b3d1-4518-9456-13a047de1740",
  "pictureLarge": null,
  "isFemale": false,
  "website": null,
  "newsletters": false,
  "email": "komo1iddin.pro@icloud.com",
  "info": null,
  "pictureId": "00000000-0000-0000-0000-000000000000",
  "googleId": null,
  "administrator": false,
  "origin": 6,
  "active": true,
  "lastConnectionDate": "2023-12-12T15:53:44.52728",
  "thirdLanguageRating": -1,
  "occupation": -1,
  "nativeLanguage": -1,
  "pictureSmall": null,
  "gender": 0,
  "externalInterfaceLanguage": 1049,
  "secondLanguageRating": -1,
  "sub": "3cd1d9c8-b3d1-4518-9456-13a047de1740",
  "lastModifiedDate": "2023-12-12T15:52:42.988649",
  "displayName": "komo1iddinpro1"
}

body = JSON.stringify(obj);
$done({body: body});

let body = JSON.parse($response.body)
body = {
  "token": "83212dc9-0df5-4338-a4d2-272d3617b3bb",
  "tokens": [
    {
      "vpn_subscription": null,
      "time_expires_sec": 4839814606,
      "license_key": null,
      "max_devices_count": 2,
      "token": "e7fdc1d4-a83c-4e14-ae01-8acca6f0f48d",
      "time_expires_iso": "2123-05-15T08:56:46+0000",
      "license_status": "VALID"
    },
    {
      "vpn_subscription": {
        "status": "ACTIVE",
        "duration_v2": "YEARLY",
        "next_bill_date_iso": "2099-09-09T20:20:20+0000",
        "next_bill_date_sec": 4092657620,
        "duration": "YEARLY"
      },
      "time_expires_sec": 4092657620,
      "license_key": "XNG5HSCG4GFYNS8P",
      "max_devices_count": 10,
      "token": "83212dc9-0df5-4338-a4d2-272d3617b3bb",
      "time_expires_iso": "2099-09-09T20:20:20+0000",
      "license_status": "VALID"
    }
  ]
}
$done({body: JSON.stringify(body)})
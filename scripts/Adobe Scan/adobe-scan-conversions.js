var body = $response.body;
var obj = JSON.parse(body);
obj = 
{
  "edit_pdf_ops": {
    "remaining": 99999999
  },
  "ocr_pdf_max_file_size": {
    "limit": 99999999
  },
  "ocr_pdf_conversions": {
    "remaining": 99999999
  },
  "organize_pdf_max_file_size": {
    "limit": 99999999999
  },
  "optimize_pdf_max_file_size": {
    "limit": 99999999999
  },
  "ipp_create_pdf_conversions": {
    "remaining": 99999999999
  },
  "password_encrypt_ops": {
    "remaining": 99999999999
  },
  "edit_pdf_max_file_size": {
    "limit": 99999999999
  },
  "optimize_pdf_ops": {
    "remaining": 99999999999
  },
  "export_pdf_conversions": {
    "remaining": 99999999999
  },
  "organize_pdf_conversions": {
    "remaining": 99999999999
  },
  "organize_pdf_documents": {
    "limit": 99999999999
  },
  "password_encrypt_max_file_size": {
    "limit": 99999999999
  },
  "create_pdf_conversions": {
    "remaining": 99999999999
  },
  "combine_pdf_conversions": {
    "remaining": 99999999999
  },
  "split_pdf_max_split_points": {
    "limit": 99999999999
  },
  "combine_pdf_max_file_size": {
    "limit": 99999999999
  },
  "export_pdf_max_file_size": {
    "limit": 99999999999
  },
  "split_pdf_conversions": {
    "remaining": 999999999990
  },
  "create_pdf_max_file_size": {
    "limit": 99999999999
  },
  "split_pdf_max_file_size": {
    "limit": 99999999999
  },
  "combine_pdf_documents": {
    "limit": 99999999999
  }
}
body = JSON.stringify(obj);
$done({body: body});
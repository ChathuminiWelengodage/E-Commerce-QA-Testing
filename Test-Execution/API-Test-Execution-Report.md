# API Test Execution Report

## 1. Test Execution Overview

| Item | Details |
|---|---|
| Project | E-Commerce Quality Assurance Testing |
| Application | Automation Exercise |
| Testing Tool | Postman |
| Testing Type | API Testing |
| Execution Status | Completed |

## 2. API Test Execution Results

| Test ID | API Test Scenario | HTTP Method | Expected Status | Actual Status | Result |
|---|---|---|---|---|---|
| API001 | Retrieve all products | GET | 200 OK | 200 OK | Passed |
| API002 | Retrieve all brands | GET | 200 OK | 200 OK | Passed |
| API003 | Search products | POST | 200 OK | 200 OK | Passed |
| API004 | Search Product Without Parameter | POST | 200 OK | 200 OK | Passed |
| API005 | Login with invalid credentials | POST | 200 OK | 200 OK | Passed |
| API006 | Verify Login Without Email Parameter | POST | 200 OK | 200 OK | Passed |
| API007 | Verify Login Using DELETE Method | DELETE | 200 OK | 200 OK | Passed |
| API008 | Create User Account | POST | 200 OK | 200 OK | Passed |
| API009 | Get User Details by Email | GET | 200 OK | 200 OK | Passed |
| API010 | Update User Account | PUT | 200 OK | 200 OK | Passed |
| API011 | Verify Updated User Details | GET | 200 OK | 200 OK | Passed |
| API012 | Delete User Account | DELETE | 200 OK | 200 OK | Passed |



## 3. Detailed Test Execution

### API001 – Retrieve All Products

- **Endpoint:** `https://automationexercise.com/api/productsList`
- **HTTP Method:** GET
- **Expected Result:** The API should return HTTP 200 OK with a JSON response containing a products array.
- **Actual Result:** The API returned HTTP 200 OK with a JSON response containing the products array.
- **Execution Status:** Passed

  ### API002 – Retrieve All Brands List

- **Endpoint:** `https://automationexercise.com/api/brandsList`
- **HTTP Method:** GET
- **Expected Result:** The API should return HTTP 200 OK with a valid JSON response containing a non-empty brands array.
- **Actual Result:** The API returned HTTP 200 OK with a valid JSON response containing the brands array.
- **Status:** Passed.

  ### API003 – Search Product

- **Endpoint:** `https://automationexercise.com/api/searchProduct`
- **HTTP Method:** POST
- **Request Body:** `x-www-form-urlencoded`
- **Parameter:** `search_product = top`
- **Expected Result:** The API should return HTTP 200 OK with a JSON response containing products matching the search keyword.
- **Actual Result:** The API returned HTTP 200 OK with a JSON response containing matching products.
- **Status:** Passed.

  ### API004 – Search Product Without Parameter

- **Endpoint:** `/api/searchProduct`
- **Method:** POST
- **Test Data:** No search_product parameter provided.
- **Expected Result:** API should return an appropriate error for the missing parameter.
- **Actual Result:** HTTP 200 OK; response body contained responseCode 400 and the expected error message.
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API005 – Verify Login with Invalid Credentials

- **Endpoint:** `/api/verifyLogin`
- **Method:** POST
- **Test Data:** Invalid email and password.
- **Expected Result:** API should reject invalid login credentials and return an appropriate error response.
- **Actual Result:** HTTP 200 OK; response body contained responseCode 404 and message "User not found!".
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API006 – Verify Login Without Email Parameter

- **Endpoint:** `/api/verifyLogin`
- **Method:** POST
- **Test Data:** Password provided; email parameter omitted.
- **Expected Result:** API should identify the missing required parameter and return an appropriate error response.
- **Actual Result:** HTTP 200 OK; response body contained responseCode 400 and the expected missing parameter error message.
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API007 – Verify Login Using DELETE Method

- **Endpoint:** `/api/verifyLogin`
- **Method:** DELETE
- **Test Data:** No request body.
- **Expected Result:** API should reject the unsupported DELETE method and return an appropriate error response.
- **Actual Result:** HTTP 200 OK; response body contained responseCode 405 and message "This request method is not supported."
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API008 – Create User Account

- **Endpoint:** `/api/createAccount`
- **Method:** POST
- **Test Data:** New test user details with a unique email address.
- **Expected Result:** API should successfully create a new user account and return responseCode 201.
- **Actual Result:** HTTP 200 OK; response body contained responseCode 201 and message "User created!".
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API009 – Get User Details by Email

- **Endpoint:** `/api/getUserDetailByEmail`
- **Method:** GET
- **Test Data:** Email address of the newly created test account.
- **Expected Result:** API should return HTTP 200 OK with the matching user's account details.
- **Actual Result:** API returned HTTP 200 OK with responseCode 200 and the correct user information.
- **Assertions:** 4 Passed, 0 Failed.
- **Status:** Passed.

  ### API010 – Update User Account
  
- **Endpoint:** `/api/updateAccount`
- **Method:** PUT
- **Test Data:** Existing test account with an updated name.
- **Expected Result:** Account details should be updated successfully.
- **Actual Result:** HTTP 200 OK; API responseCode 200 with message "User updated!".
- **Assertions:** 3 Passed, 0 Failed.
- **Status:** Passed.

  ### API011 – Verify Updated User Details
  
- **Endpoint:** `/api/getUserDetailByEmail`
- **Method:** GET
- **Test Data:** Email of the updated test account.
- **Expected Result:** Updated user details should be returned.
- **Actual Result:** HTTP 200 OK; returned user name was "Updated QA Test User".
- **Assertions:** 4 Passed, 0 Failed.
- **Status:** Passed.

  ### API012 – Delete User Account
  
- **Endpoint:** `/api/deleteAccount`
- **Method:** DELETE
- **Test Data:** Existing test account.
- **Expected Result:** Account should be deleted successfully.
- **Actual Result:** HTTP 200 OK; API responseCode 200 with message "Account deleted!".
- **Assertions:** 3 Passed, 0 Failed (first request).
- **Status:** Passed.

## 4. Test Execution Summary

| Measurement | Count |
|---|---:|
| Total API Test Cases | 12 |
| Executed | 12 |
| Passed | 12 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

## 5. Conclusion

API testing was successfully completed using Postman. A total of 12 API test cases were executed, covering product retrieval, brand retrieval, product search, login validation, and user account management operations, including account creation, retrieval, updating, and deletion.

All 12 test cases passed their defined validation criteria, with 36 successful assertions and no failed test cases. The testing helped verify API responses, HTTP status codes, response messages, and expected application behavior for both valid and invalid requests.

Overall, the API testing provided practical experience in REST API testing, request methods, response validation, and writing automated assertions using Postman. The results are documented in the API Test Execution Report. 

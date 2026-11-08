# TEST EXECUTION REPORT
## E-Commerce Website – Quality Assurance Testing

**Application:** Automation Exercise  
**Tester:** Chathumini Welengodage  
**Testing Type:** Manual Functional Testing  
**Browser:** Google Chrome  
**Operating System:** Windows

### 1. Test Execution Summary

| Metric | Result |
|---|---|
| Total Test Cases | 17 |
| Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 17 |

### 2. Test Execution Results

| Test Case ID | Test Scenario | Actual Result | Status |
|---|---|---|---|
| TC001 | Register with valid details |  Account created successfully; confirmation message displayed | Pass |
| TC002 | Register using existing email | "Email Address already exist!" message displayed  | Pass |
| TC003 | Register with empty fields | Form submission prevented because required fields were empty | Pass |
| TC004 | Login with valid credentials | Successfully logged in displayed  | Pass |
| TC005 | Login with invalid password |  Error message displayed; login rejected | Pass |
| TC006 | Login with invalid email | "Your email or password is incorrect!" message displayed; login rejected | Pass |
| TC007 | Login with empty fields | "Please fill out this field." validation message displayed | Pass |
| TC008 | View available products | Products page loaded successfully; product names and prices displayed without errors | Pass |
| TC009 | Search for an existing product | Blue Top product successfully displayed in search results | Pass |
| TC010 | View product details | Pending | Not Executed |
| TC011 | Add product to cart | Pending | Not Executed |
| TC012 | Remove product from cart | Pending | Not Executed |
| TC013 | Update product quantity | Pending | Not Executed |
| TC014 | Verify cart price | Pending | Not Executed |
| TC015 | Proceed to checkout | Pending | Not Executed |
| TC016 | Submit checkout with missing details | Pending | Not Executed |
| TC017 | Place an order | Pending | Not Executed |


### 3. Test Execution Status Definitions

- **Pass:** Actual result matches expected result.
- **Fail:** Actual result does not match expected result.
- **Blocked:** Testing cannot continue due to an issue.
- **Not Executed:** Test has not yet been performed.

### 4. Defect Tracking

Any failed test case will be investigated and documented with:

- Defect ID
- Defect title
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Screenshot evidence

### 5. Final Remarks

Test execution is currently pending. Results will be updated as the test cases are executed.

**Report Status:** In Progress

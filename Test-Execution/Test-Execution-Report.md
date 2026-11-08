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
| Executed | 17 |
| Passed | 17 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

Pass Rate: 100%

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
| TC010 | View product details | Product details page loaded successfully; name, category, price, availability, condition, and brand displayed | Pass |
| TC011 | Add product to cart | Blue Top successfully added and displayed in the shopping cart | Pass |
| TC012 | Remove product from cart | Product removed successfully; "Cart is empty" message displayed | Pass |
| TC013 | Update product quantity | Sleeveless Dress successfully added to cart with quantity 3 | Pass |
| TC014 | Verify cart price | Unit price Rs. 1,000 × quantity 3 = total Rs. 3,000; calculation correct | Pass |
| TC015 | Proceed to checkout | Checkout page loaded successfully; Address Details and Review Your Order sections displayed | Pass |
| TC016 | Submit checkout with missing details | "Please fill out this field." validation message displayed; payment submission prevented | Pass |
| TC017 | Place an order | "Congratulations! Your order has been confirmed!" message displayed | Pass |


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
  
Since no failed test cases were identified during this test execution, no defects were recorded.

## Conclusion

All 17 functional test cases were executed successfully.
No failed test cases were recorded during this test execution.
The tested e-commerce functionalities behaved as expected.

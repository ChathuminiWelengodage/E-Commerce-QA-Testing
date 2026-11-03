# DETAILED TEST CASES
## E-Commerce Website – Quality Assurance Testing

### Module 1: User Registration

| Test Case ID | Test Scenario | Test Data | Expected Result |
|---|---|---|---|
| TC001 | Register with valid details | New name, email and valid account details | User account should be created successfully |
| TC002 | Register using existing email | Previously registered email | Application should display an appropriate error |
| TC003 | Register with empty fields | Empty form | Required field validation should appear |

### Module 2: User Login

| Test Case ID | Test Scenario | Test Data | Expected Result |
|---|---|---|---|
| TC004 | Login with valid credentials | Registered email and password | User should log in successfully |
| TC005 | Login with invalid password | Registered email and incorrect password | Appropriate error message should appear |
| TC006 | Login with invalid email | Unregistered email and password | Appropriate error message should appear |
| TC007 | Login with empty fields | Empty email and password | Required field validation should appear |

### Module 3: Product Management

| Test Case ID | Test Scenario | Test Data | Expected Result |
|---|---|---|---|
| TC008 | View available products | Products page | Products should be displayed |
| TC009 | Search for an existing product | Existing product name | Matching products should appear |
| TC010 | View product details | Selected product | Correct product information should appear |

### Module 4: Shopping Cart

| Test Case ID | Test Scenario | Test Data | Expected Result |
|---|---|---|---|
| TC011 | Add product to cart | Selected product | Product should be added to cart |
| TC012 | Remove product from cart | Existing cart item | Product should be removed |
| TC013 | Update product quantity | Quantity: 2 | Cart should reflect the updated quantity |
| TC014 | Verify cart price | Product and quantity | Correct subtotal should be displayed |

### Module 5: Checkout

| Test Case ID | Test Scenario | Test Data | Expected Result |
|---|---|---|---|
| TC015 | Proceed to checkout | Cart containing a product | Checkout page should open |
| TC016 | Submit checkout with missing details | Incomplete required details | Appropriate validation should appear |
| TC017 | Place an order | Valid checkout information | Order should be placed successfully |

**Document Status:** Test Cases Prepared – Execution Pending

# Cypress Automation Test Cases

## 1. Project Information

- **Project:** E-Commerce Quality Assurance Testing
- **Website:** https://automationexercise.com/
- **Automation Tool:** Cypress 16.3.0
- **Testing Type:** Automated UI Testing
- **Test File:** `cypress/e2e/homepage.cy.js`

## 2. Automated Test Cases

| Test ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| CT001 | Verify homepage loads successfully | Open the website and check the URL and Home link. | Homepage loads successfully. |
| CT002 | Navigate to Products page | Open the homepage and click Products. | Products page opens successfully. |
| CT003 | Search for a product | Open Products, enter a product keyword, and click Search. | Relevant search results are displayed. |
| CT004 | Add a product to cart | Open Products and add the first product to the cart. | Product is added successfully. |
| CT005 | Verify added product in cart | Add a product, open the cart through the confirmation popup, and inspect the cart. | Added product appears in the cart. |
| CT006 | Add product with selected quantity | Open product details, enter quantity 4, and add it to the cart. | Cart displays the selected quantity. |
| CT007 | Remove product from cart | Add a product, open the cart, and remove the product. | Cart displays the empty-cart message. |
| CT008 | Verify Contact Us page and fields | Open Contact Us and check the name, email, and message fields. | Contact Us page and required fields are visible. |
| CT009 | Subscribe with valid email | Enter a valid email in the subscription field and submit. | Subscription success message appears. |
| CT010 | Verify product details | Open a product details page and inspect its information. | Product name, category, price, quantity, and Add to Cart option are visible. |
| CT011 | Verify login form | Open Signup / Login and inspect the login form. | Login form fields and button are visible. |
| CT012 | Verify invalid login error | Enter invalid login credentials and submit. | Appropriate login error message appears. |
| CT013 | Verify signup form | Open Signup / Login and inspect the signup form. | Signup name, email, and button are visible. |
| CT014 | Verify relevant product search results | Search for `top` and inspect the displayed products. | Search results contain relevant products. |
| CT015 | Verify cart page navigation | Click Cart from the homepage. | Shopping Cart page opens successfully. |
| CT016 | Verify available products on Products page | Open Products and inspect the product listings. | All Products heading and product listings are visible. |
| CT017 | Verify product categories on homepage | Open the homepage and inspect Women, Men, and Kids categories. | Product categories are visible. |

## 3. Test Execution Status

All 17 automated test cases passed during the final complete execution.

| Status | Count |
|---|---:|
| Passed | 17 |
| Failed | 0 |
| Total | 17 |

**Overall Status: PASS**


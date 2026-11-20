
describe('Automation Exercise - Homepage Tests', () => {

  it('should load the homepage successfully', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('include', 'automationexercise.com');

    cy.contains('a', 'Home').should('be.visible');
  });


it('should navigate to the Products page', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.url().should('include', '/products');

  cy.contains('h2', 'All Products').should('be.visible');
});


it('should search for a product successfully', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.get('#search_product').type('top');

  cy.get('#submit_search').click();

  cy.contains('h2', 'Searched Products').should('be.visible');

  cy.get('.productinfo').should('be.visible');
});


it('should add a product to the cart', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.get('.productinfo').first().contains('Add to cart').click();

  cy.contains('View Cart').click();

  cy.url().should('include', '/view_cart');

  cy.contains('Shopping Cart').should('be.visible');
});

it('should display the added product in the cart', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.get('.productinfo')
    .first()
    .contains('Add to cart')
    .click();

  cy.contains('Added!', { timeout: 10000 })
    .should('be.visible');

  cy.get('.modal-content')
    .contains('View Cart')
    .click();

  cy.get('#cart_info').should('be.visible');

  cy.get('#cart_info tbody tr')
    .should('have.length.greaterThan', 0);
});


it('should add a product with the selected quantity', () => {
  cy.visit('https://automationexercise.com/product_details/1');

  cy.get('#quantity').clear().type('4');

  cy.contains('button', 'Add to cart').click();

  cy.contains('View Cart').click();

  cy.get('#cart_info tbody tr')
    .should('have.length.greaterThan', 0);

  cy.get('.cart_quantity button').should('contain', '4');
});


it('should remove a product from the cart', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.get('.productinfo').first().contains('Add to cart').click();

  cy.contains('View Cart').click();

  cy.get('.cart_quantity_delete').first().click();

  cy.contains('Cart is empty!').should('be.visible');
});


it('should navigate to the Contact Us page', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Contact us').click();

  cy.contains('h2', 'Get In Touch').should('be.visible');

  cy.get('input[data-qa="name"]').should('be.visible');

  cy.get('input[data-qa="email"]').should('be.visible');

  cy.get('textarea[data-qa="message"]').should('be.visible');
});


it('should subscribe using a valid email address', () => {
  cy.visit('https://automationexercise.com/');

  cy.get('#susbscribe_email')
    .type('qa.subscription.test@example.com');

  cy.get('#subscribe').click();

  cy.contains('You have been successfully subscribed!')
    .should('be.visible');
});


it('should display product details correctly', () => {
  cy.visit('https://automationexercise.com/product_details/1');

  cy.contains('h2', 'Blue Top').should('be.visible');

  cy.contains('Category').should('be.visible');

  cy.contains('Rs.').should('be.visible');

  cy.get('#quantity').should('be.visible');

  cy.contains('Add to cart').should('be.visible');
});


it('should display the login form', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Signup / Login').click();

  cy.contains('h2', 'Login to your account')
    .should('be.visible');

  cy.get('input[data-qa="login-email"]')
    .should('be.visible');

  cy.get('input[data-qa="login-password"]')
    .should('be.visible');

  cy.get('button[data-qa="login-button"]')
    .should('be.visible');
});


it('should display an error for invalid login credentials', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Signup / Login').click();

  cy.get('input[data-qa="login-email"]')
    .type('invaliduser123@example.com');

  cy.get('input[data-qa="login-password"]')
    .type('WrongPassword123');

  cy.get('button[data-qa="login-button"]').click();

  cy.contains('Your email or password is incorrect!')
    .should('be.visible');
});


it('should display the signup form', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Signup / Login').click();

  cy.contains('h2', 'New User Signup!')
    .should('be.visible');

  cy.get('input[data-qa="signup-name"]')
    .should('be.visible');

  cy.get('input[data-qa="signup-email"]')
    .should('be.visible');

  cy.get('button[data-qa="signup-button"]')
    .should('be.visible');
});


it('should display relevant products in search results', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.get('#search_product').type('top');

  cy.get('#submit_search').click();

  cy.contains('h2', 'Searched Products')
    .should('be.visible');

  cy.get('.productinfo')
    .should('be.visible')
    .and('contain.text', 'Top');
});


it('should navigate to the shopping cart page', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Cart').click();

  cy.url().should('include', '/view_cart');

  cy.contains('Shopping Cart').should('be.visible');
});


it('should display available products on the Products page', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('a', 'Products').click();

  cy.contains('h2', 'All Products')
    .should('be.visible');

  cy.get('.features_items .product-image-wrapper')
    .should('have.length.greaterThan', 0);
});

it('should display product categories on the homepage', () => {
  cy.visit('https://automationexercise.com/');

  cy.contains('h2', 'Category')
    .should('be.visible');

  cy.contains('Women').should('be.visible');

  cy.contains('Men').should('be.visible');

  cy.contains('Kids').should('be.visible');
});
});

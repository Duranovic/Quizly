const emailFormGroup = "[data-test-id='emailFormGroup']"
const passwordFormGroup = "[data-test-id='passwordFormGroup']"
const rememberMeFormGroup = "[data-test-id='rememberMeFormGroup']"

const emailInput = "[data-test-id='email']";
const passwordInput = "[data-test-id='password']";
const remeberMeCheckbox = "[data-test-id='rememberMe']";
const form = "[data-test-id='form']";
const submitFormButton = "[data-test-id='submit']";
const signUpLink = "[data-test-id='signUpLink']";
const forgotPasswordLink = "[data-test-id='forgotPasswordLink']";


// Negative cases

it("Focus on the email field and blur", ()=>{
    cy.visit(Cypress.config().baseUrl + "sign-in");
    cy.get(emailInput).focus().blur();
    cy.get(emailFormGroup).should("contain", "Email is required!");
})

it("Type wrong password in the email field", ()=>{
    cy.get(emailInput).type("someEmail.com");
    cy.get(emailFormGroup).should("contain", "Please enter a valid email!");
})

it("Focus on the password field and blur", ()=>{
    cy.get(passwordInput).focus().blur();
    cy.get(passwordFormGroup).should("contain", "Password is required!")
})


// Positive cases

it("Type correct email in the email field", ()=>{
    cy.get(emailInput).focus().type("true@email.com").blur();
    cy.get(emailFormGroup).children(".error-msg-group").children(".error-msg").should("not.exist");
})

it("Type password in the password field", ()=>{
    cy.get(passwordInput).focus().type("MyStrongPassword").blur();
    cy.get(passwordFormGroup).children(".error-msg-group").children(".error-msg").should("not.exist");
})

it("Submit the form", ()=>{
    cy.get(submitFormButton).click();
    cy.visit(Cypress.config().baseUrl)
})

it("Click on the internal links", ()=>{
    cy.visit(Cypress.config().baseUrl + "sign-in");
    cy.get(forgotPasswordLink).click();
    cy.url().should("include", 'forgot-password');
    cy.visit(Cypress.config().baseUrl + "sign-in");
    cy.get(signUpLink).click();
    cy.url().should("include", "sign-up");
    cy.visit(Cypress.config().baseUrl + "sign-in");
})
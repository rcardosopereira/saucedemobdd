class LoginPage {
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('[data-test="error"]'),
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
  
    submitLogin(username,password){
      this.elements.usernameInput().clear().type(username);
      this.elements.passwordInput().clear().type(password);
      this.elements.loginBtn().click();
    }
  }
  
  export const loginPage = new LoginPage();
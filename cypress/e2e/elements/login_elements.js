class loginFuncionality {
    wellcomeTitle = () => { return '[data-cy="welcome-title"]' }
    loginTitle = () => { return 'div.w-full p-4 sm:p-12.5 xl:p-17.5 h2' }
    loginField = () => { return '[data-cy="email"]' }
    emailField = () => { return '[data-cy="password"]' }
    loginButton = () => { return '[data-cy="login-button"]' }
    msgError = () => { return '.notice p' }
}

export default loginFuncionality;
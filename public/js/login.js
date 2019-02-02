document.addEventListener('DOMContentLoaded', () => {
  const $facebookLoginButton = document.querySelector('#facebook-login-button')
  $facebookLoginButton.addEventListener('click', (event) => {
    window.location.href = 'http://localhost:3000/auth/facebook'
  })
})
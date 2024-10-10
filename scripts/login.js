document.querySelector('.js_password-toggle').addEventListener('click', function() {
    const passwordInput = document.querySelector('input[name="password"]');
    const icon = this.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('la-eye-slash');
        icon.classList.add('la-eye');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('la-eye');
        icon.classList.add('la-eye-slash');
    }
});

function validateRegisterForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let error = '';

    if (username === '') error = 'Username is required';
    else if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) error = 'Invalid email';
    else if (password.length < 6) error = 'Password must be at least 6 characters';
    else if (password !== confirmPassword) error = 'Passwords do not match';

    if (error) {
        document.getElementById('error-msg').innerText = error;
        return false; // prevent form submission
    }

    return true; // submit form
}

function validateLoginForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let error = '';

    if (!email) error = 'Email is required';
    else if (!password) error = 'Password is required';

    if (error) {
        document.getElementById('error-msg').innerText = error;
        return false;
    }

    return true;
}

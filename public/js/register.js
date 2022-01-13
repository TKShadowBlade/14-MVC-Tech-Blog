const handleRegistration = async function(evt) {
    evt.preventDefault();

    const usernameEl = document.querySelector('#username-input-register');
    const passwordEl = document.querySelector('#password-input-register');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dash');
    }
    else {
        alert('Registration Failed')
    }
};

document.querySelector('#reg-form').addEventListener('submit', handleRegistration);
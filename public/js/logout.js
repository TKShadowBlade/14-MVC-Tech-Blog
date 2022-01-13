const handleLogout = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        document.location.replace('/');
    }
    else {
        alert('Logout unsuccessful');
    }
};

document.querySelector('#logout').addEventListener('click', handleLogout);
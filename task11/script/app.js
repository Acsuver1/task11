function showLoading(show) {
    const loading = document.getElementById('loading');
    loading.style.display = show ? 'flex' : 'none';
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showLoading(true);

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const zipcode = document.getElementById('zipcode').value;
    const phone = document.getElementById('phone').value;

    const user = {
        email: email,
        username: username,
        password: password,
        name: {
            firstname: firstname,
            lastname: lastname
        },
        address: {
            city: city,
            street: street,
            number: number,
            zipcode: zipcode,
            geolocation: {
            }
        },
        phone: phone
    };

    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('User registered successfully!');
        document.getElementById('registerSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to register user.');
    })
    .finally(() => {
        showLoading(false);
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showLoading(true);

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = {
        username: username,
        password: password
    };

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Login successful!');
            console.log(data);  
        } else {
            alert('Invalid username or password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to login.');
    })
    .finally(() => {
        showLoading(false);
    });
});

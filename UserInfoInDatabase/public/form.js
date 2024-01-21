document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const resultDiv = document.getElementById('result');

    fetch(`/users/check/${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.exists) {
                resultDiv.innerHTML = 'User exists!';
            } else {
                // Add logic to create a new user
                resultDiv.innerHTML = 'User does not exist. Creating user...';
                fetch('/users/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username }),
                })
                    .then(response => response.json())
                    .then(data => {
                        resultDiv.innerHTML = data.message;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

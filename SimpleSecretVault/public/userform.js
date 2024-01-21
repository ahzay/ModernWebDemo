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

// Get references to the username field and the generate button
const usernameField = document.getElementById("username");
const generateButton = document.getElementById("generateUsername");

// Function to generate a random 10-letter string
function generateRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let randomString = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset.charAt(randomIndex);
    }
    return randomString;
}

// Add an event listener to the generate button
generateButton.addEventListener("click", () => {
    // Generate a 10-letter random string
    const randomUsername = generateRandomString(10);
    
    // Set the generated username in the username field
    usernameField.value = randomUsername;
});


const newPostField = document.getElementById("newPost");
const postButton = document.getElementById("postButton");

const fetchUserField = document.getElementById("fetchUser");
const fetchButton = document.getElementById("fetchButton");
const postsResultDiv = document.getElementById("postsResult");


// Event listener for posting a new message (replace with your actual logic)
postButton.addEventListener("click", () => {
    const username = usernameField.value.trim();
    const newPost = newPostField.value.trim();
    // Add your logic to post a new message here
    if (username && newPost) {
        // Perform the post action here (e.g., sending data to the server)
        // You can use AJAX or fetch to send data to the server and handle the response
        // Clear the input field after posting
        newPostField.value = "";
    } else {
        alert("Please enter a valid username and post.");
    }
});

// Event listener for fetching posts for a user (replace with your actual logic)
fetchButton.addEventListener("click", () => {
    const fetchUser = usernameField.value.trim();
    // Add your logic to fetch posts for a user here
    if (fetchUser) {
        // Perform the fetch action here (e.g., sending a request to the server)
        // You can use AJAX or fetch to retrieve data from the server and display it
        // Display the fetched posts in the postsResultDiv
        postsResultDiv.innerHTML = `Fetching posts for user: ${fetchUser}`;
    } else {
        alert("Please enter a valid username to fetch posts.");
    }
});
const hash = require("./hash")

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
        // API call for posting (internally if user does not exist it is created)
        // Clear the input field after posting
        const hashPromise = HashString.hash(username);
        // .then is called when the promise resolves with the hash value.
        hashPromise.then(hashValue => {
            // Handle the hash value once it's available.
            console.log('Hash:', hashValue);
        }).catch(error => {
            // .catch is called if there's an error during the hashing process.
            // Handle any errors that may occur during the hashing process.
            console.error('Error:', error);
        });  
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
        // API call for fetching posts
        // Display the fetched posts in the postsResultDiv
        postsResultDiv.innerHTML = `Fetching posts for user: ${fetchUser}`;
    } else {
        alert("Please enter a valid username to fetch posts.");
    }
});



// Define the function to handle the XHR load event
function handleXHRLoad(xhr) {
    // Define what happens on successful data submission
    if (xhr.status === 200) {
        alert('Form submitted successfully'); // Show a success message
    } else {
        alert('Error occurred: ' + xhr.statusText); // Show an error message
    }
}

function submitForm(event) {
    // Function to be called when the form is submitted

    event.preventDefault(); // This stops the default form submission behavior

    // Get the message entered in the form
    var message = document.getElementById('messageInput').value;

    // Create an XMLHttpRequest object for making HTTP requests
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/submit-form', true); // Configure it to send a POST request to the server
    xhr.setRequestHeader('Content-Type', 'application/json'); // Set the content type of the request to JSON

    // example to avoid defining the function in place, still have to wrap
    xhr.onload = function() { handleXHRLoad(xhr); };

    // Convert the message to a JSON format and send it
    xhr.send(JSON.stringify({ message: message }));
}


/*
document is a built-in object in web browsers that 
provides an interface to the content of the web page. 
It represents the HTML document loaded in that window 
and is part of the Document Object Model (DOM), which 
is a standard for how to get, change, add, or delete 
HTML elements.
*/
/*
The DOMContentLoaded event fires when the initial HTML 
document has been completely loaded and parsed, without 
waiting for stylesheets, images, and subframes to finish 
loading.
*/
document.addEventListener('DOMContentLoaded', () => {
    // Attach the event handler to the form's submit event
    document.getElementById('myForm').addEventListener('submit', submitForm);
});

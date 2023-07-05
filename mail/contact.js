// Replace the values with your own EmailJS user ID, service ID, and template ID
const EMAILJS_SERVICE_ID = 'service_l9mwi8z';
const EMAILJS_TEMPLATE_ID = 'template_6hguskk';

// Function to send the email
function sendEmail(e) {

    e.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message
    }).then(function() {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('An error occurred while sending the email. Please try again later.');
        console.log('Error:', error);
    });
}

// Attach the sendEmail function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', sendEmail);

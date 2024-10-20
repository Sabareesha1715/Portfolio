// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
    // Optionally, clear the form fields
    document.getElementById('contactForm').reset();
});

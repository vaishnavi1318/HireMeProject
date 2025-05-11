// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to handle button clicks
    function handleButtonClick(event) {
        window.location.href = event.target.getAttribute('url');
    }

    // Add event listeners to buttons
    document.getElementById('student-login-btn').addEventListener('click', handleButtonClick);
    document.getElementById('recruiter-login-btn').addEventListener('click', handleButtonClick);
    document.getElementById('start-career-btn').addEventListener('click', handleButtonClick);

});

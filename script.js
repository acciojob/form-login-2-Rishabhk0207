document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const firstName = document.querySelector('#first').value;
        const lastName = document.querySelector('#last').value;
        const phoneNumber = document.querySelector('#number').value;
        const email = document.querySelector('#email').value;

        alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
    });
});

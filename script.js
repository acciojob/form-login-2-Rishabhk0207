//your JS code here. If required.

function alerrt(event) {
	event.preventDefault().
    alert(`First Name: ${document.querySelector('#first').value} Last Name: ${document.querySelector('#last').value} Phone Number: ${document.querySelector('#number').value} Email ID: ${document.querySelector('#email').value}`);
}

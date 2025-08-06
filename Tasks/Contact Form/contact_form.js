// Bonus
const form = document.getElementById('contact_form');
const fullName = document.getElementById('full_name');
const email = document.getElementById('email_address');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(fullName.value === '' ||
        email.value === '' ||
        subject.value === '' ||
        message.value === '') {
        alert('Please fill out all fields');
    } else {
        if(regex.test(email.value)) {
            form.submit();
        }
        else {
            alert('Please enter a valid email address');
        }
    }
});
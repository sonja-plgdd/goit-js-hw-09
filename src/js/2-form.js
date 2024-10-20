const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formData = {
    email: "",
    message: ""
}

const localStorageKey = "feedback-form-state";

window.addEventListener('load', loadFormData);

function loadFormData() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const savedFormData = JSON.parse(savedData);
        formData.email = savedFormData.email || '';
        formData.message = savedFormData.message || '';

        email.value = formData.email;
        textarea.value = formData.message;
    }
}


form.addEventListener('input', handleInput);

function handleInput(event) {
    formData.email = email.value.trim();
    formData.message = textarea.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

form.addEventListener('submit', handleSumbit);

function handleSumbit(event) {
    event.preventDefault();
    if (email.value.trim() == '' || textarea.value.trim() == '') {
        alert('Fill please all fields');
        return;
    }
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));

    localStorage.removeItem(localStorageKey);
    form.reset();
}





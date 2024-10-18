const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formData = {
    email: "",
    message: ""
}
const localStorageKey = "feedback-form-state";

form.addEventListener('input', handleInput);
function handleInput(event) {
    const elements = event.currentTarget.elements;
    formData.email = elements.email.value.trim();
    formData.message = elements.message.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

form.addEventListener('submit', handleSumbit);
function handleSumbit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    if (elements.email.value.trim() == '' || elements.message.value.trim() == '') {
        alert `Fill please all fields`
    }
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));

    localStorage.removeItem(localStorageKey);
    form.reset();
}





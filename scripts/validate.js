function submitForm(evt) {
    evt.preventDefault()
}

function showError(input, errorContainer, {inputErrorClass, errorClass}) {
    input.classList.add(inputErrorClass)
    errorContainer.classList.add(errorClass)
    errorContainer.textContent = input.validationMessage
}

function hideError(input, errorContainer, {inputErrorClass, errorClass}) {
    input.classList.remove(inputErrorClass)
    errorContainer.classList.remove(errorClass)
    errorContainer.textContent = ''
}

function toggleButton(form, {submitButtonSelector, inactiveButtonClass}) {
    const button = form.querySelector(submitButtonSelector)
    const isFormValid = form.checkValidity()

    if (isFormValid) {
        button.classList.remove(inactiveButtonClass)
        button.removeAttribute('disabled')
    } else {
        button.classList.add(inactiveButtonClass)
        button.setAttribute('disabled', '')
    }
}

function validateInput(form, input, clasest) {
    const errorContainer = form.querySelector(`#error-${input.id}`)
    if (input.validity.valid) {
        hideError(input, errorContainer, clasest)
    } else {
        showError(input, errorContainer, clasest)
    }
    toggleButton(form, clasest)
}


function enableValidation({ formSelector, inputSelector, ...rest }) {
    const form = document.querySelectorAll(formSelector)

    form.forEach(form => {
        form.addEventListener('submit', submitForm)

        const inputs = form.querySelectorAll(inputSelector)
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest)
            })
        })
        toggleButton(form, rest)
    })
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error_visible'
});
export default class FormValidator {
    constructor(settings, form) {
        this.form = form
        this._inputSelector = settings.inputSelector
        this._submitButtonSelector = settings.submitButtonSelector
        this._inactiveButtonClass = settings.inactiveButtonClass
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass
        this._inputs = Array.from(this.form.querySelectorAll(this._inputSelector))
        this._button = this.form.querySelector(this._submitButtonSelector)
    }

    _showError = (input, errorMessage) => {
        const errorContainer = this.form.querySelector(`#error-${input.id}`)
        errorContainer.classList.add(this._errorClass)
        errorContainer.textContent = errorMessage
        input.classList.add(this._inputErrorClass)
    }

    _hideError = (input) => {
        const errorContainer = this.form.querySelector(`#error-${input.id}`)
        errorContainer.classList.remove(this._errorClass)
        errorContainer.textContent = ''
        input.classList.remove(this._inputErrorClass)
    }

    _hasInvalidInput = () => {
        return Array.from(this._inputs).some((element) => !element.validity.valid);
    };

    _toggleButton = () => {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._inactiveButtonClass)
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._inactiveButtonClass)
            this._button.disabled = false;
        }
    }

    _validateInput = (input) => {
        if (input.validity.valid) {
            this._hideError(input)
        } else {
            this._showError(input, input.validationMessage)
        }
    }

    _setEventListeners = () => {
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input)
                this._toggleButton()
            })
        })
    }

    resetValidation = () => {
        this._toggleButton()
        this._inputs.forEach((input) => {
            this._hideError(input)
        })
    }

    enableValidation = () => {
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })

        this._setEventListeners()
    }
}
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, renderer) {
        super(popupSelector)
        this._renderer = renderer
        this._form = this._popupSelector.querySelector('.form')
        this._inputAll = Array.from(this._form.querySelectorAll('.form__input'))
    }

    _getInputValues() {
        this._formValues = {}
        this._inputAll.forEach(input => this._formValues[input.name] = input.value)
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._renderer(this._getInputValues());
        })
    }

    closePopup() {
        this._form.reset()
        super.closePopup()
    }
}
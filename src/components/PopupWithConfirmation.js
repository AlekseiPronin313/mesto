import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popupSelector.querySelector('#botton-delete')
    }

    openPopup(item) {
        super.openPopup()
        this._element = item
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('click', (evt) => {
            evt.preventDefault()
            this._handleFormSubmit(this._element)
        })
    }
}
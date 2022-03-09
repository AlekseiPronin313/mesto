import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imagePopup = this._popupSelector.querySelector('.popup__jpg')
        this._textPopup = this._popupSelector.querySelector('.popup__text')
    }

    openPopup(link, title) {
        super.openPopup()
        this._imagePopup.src = link
        this._imagePopup.alt = title
        this._textPopup.textContent = title
    }
}
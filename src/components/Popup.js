export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector)
        this._closeButton = this._popupSelector.querySelector('.popup__close')
    }
    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup()
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.closePopup();
        });
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__overlay')) this.closePopup();
        })
    }
}
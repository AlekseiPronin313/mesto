import { openPopup } from './index.js'
export class Card {
    constructor(selector, name, link) {
        this._name = name
        this._link = link
        this._selector = selector
    }
    
    _getTemplate() {
          const cardElement = document
          .querySelector(this._selector)
          .content
          .querySelector('.element')
          .cloneNode(true);
          
          return cardElement;
      } 

      getCardElement() {
        this._element = this._getTemplate()
        this._imageCard = this._element.querySelector('.element__img')
        this._imageCard.alt = this._name
        this._imageCard.src = this._link
        this._element.querySelector('.element__text').textContent = this._name
        this._setEventListeners()
        return this._element
    }

      _likeCard(evt) {
        evt.target.classList.toggle('element__like_active');
      }
    
      _deleteCard(evt) {
        evt.target.closest('.element').remove();
      }

      _openingPicture = () => {
        const popupOpacity = document.querySelector('.popup_opacity')
        popupOpacity.querySelector('.popup__text').textContent =  this._name
        popupOpacity.querySelector('.popup__jpg').src = this._link
        popupOpacity.querySelector('.popup__jpg').alt = this._name
        openPopup(popupOpacity) 
      }

      _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', this._likeCard);
        this._element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
        this._element.querySelector('.element__img').addEventListener('click', this._openingPicture);
      }
}
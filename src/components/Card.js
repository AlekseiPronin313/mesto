export default class Card {
  constructor(link, title, template, { handleCardClick }) {
    this._link = link
    this._name = title
    this._template = template
    this._handleCardClick = handleCardClick
    this._element = this._getTemplate()
    this._img = this._element.querySelector('.element__img')
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  getCardElement() {
    this._img.src = this._link
    this._img.alt = this._name
    this._element.querySelector('.element__text').textContent = this._name
    this._setEventListeners()
    return this._element
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', this._likeCard);
    this._element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
  }
  _likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

}
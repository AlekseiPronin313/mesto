export default class Card {
  constructor({ data, template, handleCardClick, userId, handleDelete, handleCardLike }) {
    this._link = data.link
    this._name = data.name
    this._cardId = data._id
    this._userId = userId
    this._ownerId = data.owner._id
    this._likes = data.likes.length
    this._isLike = data.likes.some(item => item._id == this._userId)

    this._template = template
    this._handleDelete = handleDelete
    this._handleCardClick = handleCardClick
    this._handleCardLike = handleCardLike

    this._element = this._getTemplate()
    this._img = this._element.querySelector('.element__img')
    this._likeCount = this._element.querySelector('.element__like-counter')
    this._likeButton = this._element.querySelector('.element__like')
    this._deleteCard = this._element.querySelector('.element__delete')
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike(this)
    });
    this._deleteCard.addEventListener('click', () => {
      this._handleDelete(this)
    })
    this._img.addEventListener('click', () => {
      this._handleCardClick()
    })
  }

  getCardElement() {
    this._img.src = this._link
    this._img.alt = this._name
    this._element.querySelector('.element__text').textContent = this._name
    this._likeCount.textContent = this._likes

    if (this._ownerId != this._userId) {
      this._deleteCard.classList.add('element__delete_hidden')
    }
    if (this._isLike) {
      this._likeButton.classList.add('element__like_active')
    }
    this._setEventListeners()
    return this._element
  }

  deleteCard() {
    this._element.remove()
  }

  getCard() {
    return this._cardId
  }

  getLiked() {
    return this._isLike
  }

  setLikes(item) {
    this._likeCount.textContent = item.likes.length
    this._isLike = !this._isLike
    if (this._isLike) {
      this._likeButton.classList.add('element__like_active')
    } else {
      this._likeButton.classList.remove('element__like_active')
    }
  }
}
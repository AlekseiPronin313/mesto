export const initialCards = [{
    name: 'Рязань',
    link: 'https://cdn.fishki.net/upload/post/2018/09/23/2712385/050280ed088419560782bdf9d881c75e.jpg',
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
},
{
    name: 'Чебоксары',
    link: 'https://static.tildacdn.com/tild6665-6531-4661-b564-306366306164/133.jpg',
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',

}
]
export const openEdit = document.querySelector('.profile__button-editor')
export const popUpEditor = document.querySelector('.popup_editor')
export const title = document.querySelector('.profile__title')
export const subtitle = document.querySelector('.profile__subtitle')
export const inputName = document.querySelector('#name')
export const inputInfo = document.querySelector('#info')
export const openAdd = document.querySelector('.profile__button-add')
export const popUpAdd = document.querySelector('.popup_add')
export const elements = document.querySelector('.elements__list')
export const profileAvatar = document.querySelector('.profile__avatar')
export const bottonEditor = document.querySelector('#botton-editor')
export const bottonAdd = document.querySelector('#botton-add')
export const bottonDelete = document.querySelector('#botton-delete')
export const bottonAvatar = document.querySelector('#botton-avatar')
export const avatarPopup = document.querySelector('.profile__overlay')
export const popupImage = document.querySelector('.popup_image')
export const profileAvatarPopup = document.querySelector ('.popup_avatar')
export const popupDelete = document.querySelector('.popup_delete')

export const enableValidation = ({
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error_visible'
})
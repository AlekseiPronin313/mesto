export const initialCards = [{
    title: 'Рязань',
    link: 'https://cdn.fishki.net/upload/post/2018/09/23/2712385/050280ed088419560782bdf9d881c75e.jpg',
},
{
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
},
{
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
},
{
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
},
{
    title: 'Чебоксары',
    link: 'https://static.tildacdn.com/tild6665-6531-4661-b564-306366306164/133.jpg',
},
{
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',

}
]
export const openUp = document.querySelector('.profile__button-editor')
export const popUpEditor = document.querySelector('.popup_editor')
export const title = document.querySelector('.profile__title')
export const subtitle = document.querySelector('.profile__subtitle')
export const inputName = document.querySelector('#name')
export const inputInfo = document.querySelector('#info')
export const popUpAddButton = document.querySelector('.profile__button-add')
export const popUpAdd = document.querySelector('.popup_add')

export const enableValidation = ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error_visible'
})
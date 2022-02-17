import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const initialCards = [{
    name: 'Рязань',
    link: 'https://polit.ru/media/photolib/2019/03/12/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C_%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9_1552384794.jpg',
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
];

const popups = document.querySelectorAll('.popup')
const openUp = document.querySelector('.profile__button-editor');
const popUpEditor = document.querySelector('#popup_editor');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('#name');
const inputInfo = document.querySelector('#info');
const formEditor = document.querySelector('#popup__container_editor');
const formAdd = document.querySelector('#popup__container_add');
const inputTitle = document.querySelector('#title');
const inputLink = document.querySelector('#link');
const photoEditing = document.querySelector('.profile__button-add');
const popUpAdd = document.querySelector('#popup_add');
const elements = document.querySelector('.elements');
const form = document.querySelector('#form-add')
const cardTemplateSelector = "#template"

const enableValidation = ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error_visible'
});

const formEditValidator = new FormValidator(enableValidation, popUpEditor);
const formAddValidator = new FormValidator(enableValidation, popUpAdd);
formEditValidator.enableValidation();
formAddValidator.enableValidation();

function render() {
    const html = initialCards
        .map((item) => {
            return getItems(item);
        });

    elements.append(...html);
}

function getItems(item) {
    const card = new Card(cardTemplateSelector, item.name, item.link)
    return card.getCardElement()
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc)
}

function closePopup(popup) {
    popup.closest('.popup').classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
};

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened)
    };
};

popups.forEach(element => {
    const closingPopUps = element.querySelector('.popup__close');
    closingPopUps.addEventListener('click', () => closePopup(element))
    const overlay = element.querySelector('.popup__overlay')
    overlay.addEventListener('click', () => closePopup(element))
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = inputName.value
    subtitle.textContent = inputInfo.value
    closePopup(popUpEditor)
}

function openEdit() {
    openPopup(popUpEditor)
    inputName.value = title.textContent
    inputInfo.value = subtitle.textContent
    formEditValidator.resetValidation()
}

function openAddCard() {
    openPopup(popUpAdd)
    form.reset()
    formAddValidator.resetValidation()
}

function addCards() {
    elements.prepend(getItems({
        link: inputLink.value,
        name: inputTitle.value,
    }));
    closePopup(popUpAdd)
}

openUp.addEventListener('click', openEdit)
photoEditing.addEventListener('click', openAddCard);
formEditor.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', addCards);
render();
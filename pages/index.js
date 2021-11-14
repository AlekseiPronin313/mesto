let openUp = document.querySelector('.profile__button-editor');
let closeUp = document.querySelector('.popup__close');
let popUp = document.querySelector('.popup');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('.popup__name');
let inputInfo = document.querySelector('.popup__info');
let formElement = document.querySelector('.popup__container')

function open() {
    inputName.value = title.textContent
    inputInfo.value = subtitle.textContent
    popUp.classList.add('popup_opened');
}

function close() {
    popUp.classList.remove('popup_opened');
}

openUp.addEventListener('click', open);
closeUp.addEventListener('click', close);

function formSubmitHandler (evt) {
    evt.preventDefault();
    title.textContent = inputName.value
    subtitle.textContent = inputInfo.value
    close();
}

formElement.addEventListener('submit', formSubmitHandler);
const initialCards = [{
        name: 'Рязань',
        link: 'https://polit.ru/media/photolib/2019/03/12/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C_%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9_1552384794.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Чебоксары',
        link: 'https://static.tildacdn.com/tild6665-6531-4661-b564-306366306164/133.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let openUp = document.querySelector('.profile__button-editor');
let closeUp = document.querySelectorAll('.popup__close');
let popUpEditor = document.querySelector('#popup_editor');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('.popup__input_type_name');
let inputInfo = document.querySelector('.popup__input_type_info');
let formEditor = document.querySelector('#popup__container_editor');
const formAdd = document.querySelector('#popup__container_add');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const photoEditing = document.querySelector('.profile__button-add');
const popUpAdd = document.querySelector('#popup_add');
const popUp = document.querySelectorAll('.popup');
const popupImage = document.querySelector('#popup_image');
const popupJpg = document.querySelector('.popup__jpg');
const popupText = document.querySelector('.popup__text');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');


function render() {
    const html = initialCards
        .map((item) => {
            return getItem(item);
        });

    elements.append(...html);
}

function getItem(item) {
    const newItem = template.content.cloneNode(true);
    const elementText = newItem.querySelector('.element__text');
    const imageCard = newItem.querySelector('.element__img');
    const like = newItem.querySelector('.element__like');
    const deleteCard = newItem.querySelector('.element__delete');

    elementText.textContent = item.name;
    imageCard.src = item.link;
    imageCard.alt = item.name;

    like.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    imageCard.addEventListener('click', function () {
        popupJpg.src = imageCard.src;
        popupText.textContent = imageCard.alt;
        popupJpg.alt = imageCard.alt;
        popupImage.classList.add('popup_opened');
    });
    deleteCard.addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    });
    return newItem;
}


function open() {
    inputName.value = title.textContent
    inputInfo.value = subtitle.textContent
    popUpEditor.classList.add('popup_opened');
}

function close() {
    popUp.forEach(item => {
        item.classList.remove('popup_opened');
    });
}

function popUpAddOpen() {
    popUpAdd.classList.add('popup_opened');
}

closeUp.forEach(item => {
    item.addEventListener('click', close);
});

photoEditing.addEventListener('click', popUpAddOpen);

openUp.addEventListener('click', open);

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = inputName.value
    subtitle.textContent = inputInfo.value
    close();
}

function addCards(evt) {
    evt.preventDefault();
    const initialCards = {
        link: inputLink.value,
        name: inputTitle.value
    };
    const newCard = getItem(initialCards);
    elements.prepend(newCard);
    inputTitle.value = '';
    inputLink.value = '';
    close();

}

formEditor.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', addCards);
render();
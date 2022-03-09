import "./index.css"
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    initialCards,
    openUp,
    popUpEditor,
    title,
    subtitle,
    inputName,
    inputInfo,
    popUpAddButton,
    popUpAdd,
    enableValidation
} from "../utils/constants.js"

const formEditValidator = new FormValidator(enableValidation, popUpEditor)
const formAddValidator = new FormValidator(enableValidation, popUpAdd)
formEditValidator.enableValidation()
formAddValidator.enableValidation()

const userInfo = new UserInfo({ title, subtitle })

const popupWithImage = new PopupWithImage('.popup_image')
popupWithImage.setEventListeners()

const cards = (item) => {
    const newCard = new Card(item.link, item.title, ".template", {
        handleCardClick: () => {
            popupWithImage.openPopup(item.link, item.title);
        }

    })
    return newCard.getCardElement()
}

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        section.addItem(cards(item));
    }
}, '.elements__list')

section.rendererItem()

const editorForm = new PopupWithForm({
    popupSelector: '.popup_editor',
    renderer: (item) => {
        userInfo.setUserInfo(item.name, item.info)
        editorForm.closePopup()
    }
})
editorForm.setEventListeners()

const addCardForm = new PopupWithForm({
    popupSelector: '.popup_add',
    renderer: (item) => {
        section.addItem(cards(item))
    }
})
addCardForm.setEventListeners()

popUpAddButton.addEventListener('click', () => {
    addCardForm.openPopup()
    formAddValidator.resetValidation()
})

openUp.addEventListener('click', () => {
    const user = userInfo.getUserInfo()
    inputName.value = user.name
    inputInfo.value = user.info
    formEditValidator.resetValidation()
    editorForm.openPopup()
})
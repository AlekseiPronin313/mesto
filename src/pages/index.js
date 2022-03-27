import "./index.css"
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";
import {
    openEdit,
    popUpEditor,
    title,
    subtitle,
    inputName,
    inputInfo,
    openAdd,
    popUpAdd,
    enableValidation,
    elements,
    profileAvatar,
    bottonEditor,
    bottonAdd,
    bottonAvatar,
    avatarPopup,
    popupImage,
    profileAvatarPopup,
    popupDelete,
    bottonDelete
} from "../utils/constants.js"

const formEditValidator = new FormValidator(enableValidation, popUpEditor)
const formAddValidator = new FormValidator(enableValidation, popUpAdd)
const formAvatarValidator = new FormValidator(enableValidation, profileAvatarPopup)

formEditValidator.enableValidation()
formAddValidator.enableValidation()
formAvatarValidator.enableValidation()

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
        authorization: '2e6c2161-1c89-4ad5-975b-fea0e2b810c0',
        'Content-Type': 'application/json'
    }
});

const getUser = api.getProfile()
    .then((userInfoData) => {
        return userInfoData
    })
    .catch((err) => {
        console.log(err)
    })

const getCard = api.getCards()
    .then((getCardData) => {
        return getCardData
    })
    .catch((err) => {
        console.log(err)
    })

const userInfo = new UserInfo({ 
    nameSelector: title, 
    jobSelector: subtitle, 
    avatarSelector :profileAvatar 
})

const popupEditor = (userData) => {
    bottonEditor.textContent = 'Сохранение...'
    api.editProfile(userData)
        .then((res) => {
            userInfo.setUserInfo({
                name: res.name,
                about: res.about,
                avatar: res.avatar
            })
            editorForm.closePopup()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            bottonEditor.textContent = 'Сохранить'
        })
}

const popupAdd = (cardData) => {
    bottonAdd.textContent = 'Создание...'
    api.addCard(cardData)
        .then((res) => {
            const renderCard = cards(res)
            section.addItem(renderCard)
            formAddValidator.disabledButton()
            addCardForm.closePopup()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            bottonAdd.textContent = 'Создать'
        })
}
const cards = (item) => {
    const newCard = new Card({
        data: item,
        template: ".template",
        handleCardClick: () => {
            popupWithImage.openPopup(item)
        },
        userId: userInfo.getId(),
         handleDelete: (item) => {
            cardDelet(item)
        },
        handleCardLike: (item) => {
            likeCard(item)
        },
        
    })
    return newCard.getCardElement()
}

const section = new Section({
    items: [],
    renderer: cards
}, elements)

const avatarForm = (avatarData) => {
    bottonAvatar.textContent = 'Сохранение...'
    api.profileAvatar(avatarData)
        .then((res) => {
            userInfo.setUserInfo({
                name: res.name,
                about: res.about,
                avatar: res.avatar
            })
            popupAvatar.closePopup()

        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            bottonAvatar.textContent = 'Сохранить'
        })
}

const cardDelet = (item) => {
    popupWithConfirmation.openPopup(item)
}

const deleteCardConfirmation = (item) => {
    bottonDelete.textContent = 'Удаление...'
    api.deleteCard(item.getCard())
        .then(() => {
            item.deleteCard()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupWithConfirmation.closePopup()
            bottonDelete.textContent = 'Да'
        })
}



const popupAvatar = new PopupWithForm(profileAvatarPopup, avatarForm)
const editorForm = new PopupWithForm(popUpEditor, popupEditor)
const addCardForm = new PopupWithForm(popUpAdd, popupAdd)
const popupWithConfirmation = new PopupWithConfirmation(popupDelete, deleteCardConfirmation)
const popupWithImage = new PopupWithImage(popupImage)

const likeCard = (card) => {
    if (!card.getLiked()) {
        api.putLike(card.getCard())
            .then((res) => {
                card.setLikes(res)
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        api.deleteLike(card.getCard())
            .then((res) => {
                card.setLikes(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

openEdit.addEventListener('click', () => {
    const user = userInfo.getUserInfo()
    inputName.value = user.name
    inputInfo.value = user.about
    formEditValidator.resetValidation()
    editorForm.openPopup()
})

editorForm.setEventListeners()

openAdd.addEventListener('click', () => {
    addCardForm.openPopup()
    formAddValidator.resetValidation()
})

addCardForm.setEventListeners()

popupWithImage.setEventListeners()
avatarPopup.addEventListener('click', () => {
    formAvatarValidator.resetValidation()
    popupAvatar.openPopup()
})

popupAvatar.setEventListeners()

popupWithConfirmation.setEventListeners()

Promise.all([getUser, getCard])
    .then(([userInfoData, getCardData]) => {
        userInfo.setUserInfo({
            name: userInfoData.name,
            about: userInfoData.about,
            avatar: userInfoData.avatar
        })
        userInfo.setId(userInfoData._id)
        section.rendererItem(getCardData)
    })
    .catch((err) => {
        console.log(err)
    })
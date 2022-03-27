export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector}) {
        this._name = nameSelector
        this._job = jobSelector
        this._avatar = avatarSelector
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
        }
    }

    getId() {
        return this._id
    }

    setId(id) {
        this._id = id
    }
    
    setUserInfo({name, about, avatar}) {
        this._name.textContent = name
        this._job.textContent = about
        this._avatar.src = avatar
    }
}
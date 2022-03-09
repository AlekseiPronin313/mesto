export default class UserInfo {
    constructor({ title, subtitle }) {
        this._name = title
        this._job = subtitle
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._job.textContent,
        }
    }

    setUserInfo(name, info) {
        this._name.textContent = name
        this._job.textContent = info
    }
}

const ACCOUNT = 'Account';
const FORMS = 'Forms';
export const api: any = {
    login: `${ACCOUNT}/ValidateUser`,
    signup: `${ACCOUNT}/Signup`,
    checkEmail: 'User/CheckExisting',
    getFormsList: `${FORMS}/FilterWorkSpaceforms`,
    SendResetPasswordLinq: 'Account/SendResetPasswordLinq',
}
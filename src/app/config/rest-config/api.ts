
const ACCOUNT = 'Account';
const FORMS = 'Forms';
export const api: any = {
    login: `${ACCOUNT}/ValidateUser`,
    signup: `${ACCOUNT}/Signup`,
    checkEmail: 'User/CheckExisting',
    getFormsList: `${FORMS}/FilterWorkSpaceforms`,
    GetFoldersListWithForms: 'Folders/GetFoldersListWithForms',
    SendResetPasswordLinq: 'Account/SendResetPasswordLinq',
    GetMasterPlanDetailById: "Plan/GetMasterPlanDetailById",
    getAllActiveForms: 'Forms/GetActiveFormswithoutPagination',
    getFolders: 'Folders/GetFolderswithoutPagination',
    validateFormName: 'Forms/ValidateFormName',
    archive: 'Forms/BulkAction',
    deleteForm: 'Forms/BulkAction',
    getRoleUsers: 'Forms/GetFormUserRoleWorkSpace',
    saveRolePermission: 'Forms/SaveRolePermission',
    getRolePermissions: 'Forms/GetRolePermission',
    activateUser: "Account/ActivateUser",
    getRolePermission: 'Forms/GetRolePermission',
    getFormUserRoleWorkSpaces: 'Forms/GetFormUserRoleWorkSpaces',
    deleteRolePermission: 'Forms/DeleteRolePermission',
    moveFolder: "Forms/MoveForm",
    resetPassword: 'Account/ResetPassword',
    activateResetPasswordLink: 'Account/ActivateResetPasswordLink',
    deactivateResetPasswordLink: 'Account/DeactivateResetPasswordLink',
    getUserWorkSpacesWithoutPagination: 'WorkSpace/GetUserWorkSpacesWithoutPagination',
    getUserWorkSpacesForSuperMaster: 'User/GetUserWorkSpacesForSuperMaster'
}   

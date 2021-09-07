
const ACCOUNT = 'Account';
const FORMS = 'Forms';
export const api: any = {
    login: `${ACCOUNT}/ValidateUser`,
    signup: `${ACCOUNT}/Signup`,
    checkEmail: 'User/CheckExisting',
    getFormsList: `${FORMS}/FilterWorkSpaceforms`,
    GetFoldersListWithForms: 'Folders/GetFoldersListWithForms',
    SendResetPasswordLinq: 'Account/SendResetPasswordLinq',
    UpdateFormAttributes: "Forms/UpdateFormAttributes",
    getMasterPlanDetailById: "Plan/GetMasterPlanDetailById",
    getAllActiveForms: 'Forms/GetActiveFormswithoutPagination',
    getFolders: 'Folders/GetFolderswithoutPagination',
    validateFormName: 'Forms/ValidateFormName',
    GetDetailsOfWorkflow: "Forms/GetDetailsOfWorkflow",
    AddUserToWorkFlow: "Forms/AddUserToWorkFlow",
    DeleteUserFromWorkFlow: "Forms/DeleteUserFromWorkFlow",
    AddLevelInWorkFlowLevels: "Forms/AddLevelInWorkFlowLevels",
    DeleteLevelInWorkFlowLevels: "Forms/DeleteLevelInWorkFlowLevels",
    GetNotifications: "Forms/GetNotifications",
    DeleteFormEntries: "Forms/DeleteFormEntries",
    CopyFormAttributes: "Forms/CopyFormAttributes",
    GetFormActivityLogsByFormId: "Forms/GetFormActivityLogsByFormId",
    archive: 'Forms/BulkAction',
    deleteForm: 'Forms/BulkAction',
    bulkAction: 'Forms/BulkAction',
    getRoleUsers: 'Forms/GetFormUserRoleWorkSpace',
    saveRolePermission: 'Forms/SaveRolePermission',
    getRolePermissions: 'Forms/GetRolePermission',
    activateUser: "Account/ActivateUser",
    getRolePermission: 'Forms/GetRolePermission',
    getFormUserRoleWorkSpaces: 'Forms/GetFormUserRoleWorkSpaces',
    deleteRolePermission: 'Forms/DeleteRolePermission',
    moveFolder: "Forms/MoveForm",
    SaveFolderAttributes: "Folders/SaveFolderAttributes",
    ValidateFolderName: "Folders/ValidateFolderName",
    SaveFormEntry: "Forms/SaveFormEntry",
    SaveWorkspaceAccountSettings: "Payment/SaveWorkspaceAccountSettings",
    SaveFormAttributes: "Forms/SaveFormAttributes",
    GetFormDesign: "Forms/GetFormDesign",
    saveFormDesign: "Forms/SaveFormDesign",
    GetFormEntries: "Forms/GetFormEntries",
    GetWorkspaceAccountSettingsByWorkspaceId: "Payment/GetWorkspaceAccountSettingsByWorkspaceId",
    resetPassword: 'Account/ResetPassword',
    activateResetPasswordLink: 'Account/ActivateResetPasswordLink',
    deactivateResetPasswordLink: 'Account/DeactivateResetPasswordLink',
    getUserWorkSpacesWithoutPagination: 'WorkSpace/GetUserWorkSpacesWithoutPagination',
    getUserWorkSpacesForSuperMaster: 'User/GetUserWorkSpacesForSuperMaster',
    deleteWorkSpace: 'WorkSpace/DeleteWorkSpace',
    setCurrentWorkSpaceForAdmin: 'WorkSpace/SetCurrentWorkSpaceForAdmin',
    saveWorkSpace: 'WorkSpace/SaveWorkSpace',
    getAccountsOfWorkspace: 'Payment/GetAccountsOfWorkspace',
    saveWorkspaceAccountSettings: 'Payment/SaveWorkspaceAccountSettings',
    updateWorkspaceAccountSettings: 'Payment/UpdateWorkspaceAccountSettings',
    deleteWorkspaceAccountSettings: 'Payment/DeleteWorkspaceAccountSettings',
    getUsersOfWorkspace: 'WorkSpace/GetUsersOfWorkspace',
    getActiveRoles: 'Role/GetActiveRoles',
    inviteUser: 'User/InviteUser',
    deleteUserFromWorkspace: 'WorkSpace/DeleteUserFromWorkspace',
    updateInvitedUser: 'User/UpdateInvitedUser',
    getRoles: 'Role/GetRoles',
    deleteRole: 'Role/DeleteRole',
    getUserPlanDetailByWorkspace: 'Forms/GetUserPlanDetailByWorkspace',
    getWorkspacePlanHistory: 'Plan/GetWorkspacePlanHistory',
    sendRefferalLinkByEmail: 'WorkSpace/SendRefferalLinkByEmail',
    getRoleDetails: 'Role/GetRoleDetails',
    validateRoleName: 'Role/ValidateRoleName',
    saveRole: 'Role/SaveRole',
    getMasterPlansWithoutPagination: 'Plan/GetMasterPlansWithoutPagination',
    getUserWorkSpaces: 'User/GetUserWorkSpaces',
    unSubscriptionPlan: "Account/UnSubscriptionPlan",
    resendEmailToInvitedUser: 'User/ResendEmailToInvitedUser',
    setCurrentWorkSpace: 'WorkSpace/SetCurrentWorkSpace',
    uploadFiles: "WorkSpace/UploadFiles",
    getUserAllWorkSpacesWithPlan: "WorkSpace/GetUserAllWorkSpacesWithPlan",
    uploadProfileImage: "User/UploadProfileImage",
    updateUserProfile: "User/UpdateUserProfile",
    checkUserByPassword: "Account/CheckUserByPassword",
    changePassword: "Account/ChangePassword",
    uploadFilesForWorkspace: "WorkSpace/UploadFilesForWorkspace",
    savePayment: "Payment/SavePayment"
}   

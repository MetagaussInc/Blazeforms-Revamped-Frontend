import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions";

export const userFeatureKey = "user";

interface WorkSpaceDetail {
  workSpaceName: any;
  workSpaceId: any;
}
export interface UserState {
  user: any;
  access_token: any;
  user_plan_detail: any;
  user_workspace_detail: any;
  currentWorkSpaceDetail: WorkSpaceDetail;
  userLoginAttempts: number;
}

export const initialState: UserState = {
  user: null,
  access_token: null,
  user_plan_detail: null,
  user_workspace_detail: null,
  currentWorkSpaceDetail: {
    workSpaceName: null,
    workSpaceId: null,
  },
  userLoginAttempts: 0,
};

export const reducer = createReducer(
  initialState,
  // on(UserActions.userLogin, state => state),
  on(UserActions.loadUser, (state) => {
    const bForms: any = localStorage.getItem("bforms");
    return {
      user: JSON.parse(bForms)?.user,
      access_token: JSON.parse(bForms)?.access_token,
      user_plan_detail: JSON.parse(bForms)?.user_plan_detail,
      user_workspace_detail: JSON.parse(bForms)?.user_workspace_detail,
      currentWorkSpaceDetail: {
        workSpaceName: JSON.parse(bForms)?.currentWorkSpaceName,
        workSpaceId: JSON.parse(bForms)?.currentWorkSpaceId,
      },
      userLoginAttempts: 0,
    };
  }),
  on(UserActions.userLoginSuccess, (state, action) => {
    localStorage.setItem(
      "bforms",
      JSON.stringify({
        user: action.props.user,
        access_token: action.props.access_token,
        currentWorkSpaceName: action.props.user.WorkspaceDetail.Name,
        currentWorkSpaceId: action.props.user.WorkspaceDetail.Id,
      })
    );
    return {
      user: action.props.user,
      isUserLoggedin: true,
      apiCompleted: true,
      access_token: action.props.access_token,
      user_plan_detail: null,
      user_workspace_detail: null,
      currentWorkSpaceDetail: {
        workSpaceName: action.props.user.WorkspaceDetail.Name,
        workSpaceId: action.props.user.WorkspaceDetail.Id,
      },
      userLoginAttempts: 0,
    };
  }),
  on(UserActions.userPlanDetailSuccess, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    const bForms: any = localStorage.getItem("bforms");

    localStorage.setItem(
      "bforms",
      JSON.stringify({
        ...JSON.parse(bForms),
        user_plan_detail: action.props,
      })
    );

    updatedState.user_plan_detail = action.props;
    return updatedState;
  }),
  on(UserActions.userWorkspaceDetailSuccess, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    updatedState.user_workspace_detail = action.props;
    const bForms: any = localStorage.getItem("bforms");
    localStorage.setItem(
      "bforms",
      JSON.stringify({
        ...JSON.parse(bForms),
        user_workspace_detail: action.props,
      })
    );
    return updatedState;
  }),
  on(UserActions.userLoginError, (state, action) => {
    let loginAtt = action.props?.multipleData?.AccessFailedCount;
    return {
      ...(action?.props?.message.includes("Your plan has been Expired") && {
        isFailed: true,
        redirectToPlans: true,
      }),
      user: null,
      isUserLoggedin: false,
      apiCompleted: true,
      access_token: null,
      user_plan_detail: null,
      user_workspace_detail: null,
      currentWorkSpaceDetail: {
        workSpaceName: null,
        workSpaceId: null,
      },
      userLoginAttempts: loginAtt,
    };
  }),
  on(UserActions.userLogout, (state, action) => {
    localStorage.removeItem("bforms");
    return {
      user: null,
      access_token: null,
      user_plan_detail: null,
      user_workspace_detail: null,
      currentWorkSpaceDetail: {
        workSpaceName: null,
        workSpaceId: null,
      },
      userLoginAttempts: 0,
    };
  }),
  on(UserActions.userProfileUpdate, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    updatedState.user.FirstName = action.props.payload.FirstName;
    updatedState.user.LastName = action.props.payload.LastName;
    localStorage.setItem("bforms", JSON.stringify(updatedState));
    return updatedState;
  }),
  on(UserActions.userProfileImageUpdate, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    updatedState.user.ProfileImage = action.props.payload;
    localStorage.setItem("bforms", JSON.stringify(updatedState));
    return updatedState;
  }),
  on(UserActions.updateUserPlanDetail, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    updatedState.user_plan_detail = action.props.payload;
    return updatedState;
  }),
  on(UserActions.updateCurrentWorkSpaceDetail, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    updatedState.currentWorkSpaceDetail = {
      workSpaceName: action.props.WorkSpaceName,
      workSpaceId: action.props.WorkSpaceId,
    };
    const bForms: any = localStorage.getItem("bforms");
    localStorage.setItem(
      "bforms",
      JSON.stringify({
        ...JSON.parse(bForms),
        currentWorkSpaceName: action.props.WorkSpaceName,
        currentWorkSpaceId: action.props.WorkSpaceId,
      })
    );
    return updatedState;
  }),
  on(UserActions.userWorkspaceLogoUpdate, (state, action) => {
    const updatedState = JSON.parse(JSON.stringify(state));
    console.log(action);
    console.log(updatedState);
    updatedState.user.Logo = action.props.logo;
    updatedState.user.LogoExt = action.props.ext;
    updatedState.user.WorkspaceDetail.Logo = action.props.logo;
    updatedState.user.WorkspaceDetail.LogoExt = action.props.ext;
    localStorage.setItem("bforms", JSON.stringify(updatedState));
    return updatedState;
  })
);

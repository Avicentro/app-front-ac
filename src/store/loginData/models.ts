interface IData {
  role: string;
  name: string;
  email: string;
  permissions: any;
  imageProfile: string;
  accessToken: string;
}

export interface ILoginData {
  data: IData;
  initialPath: string;
  isAuthenticated: boolean;
}

interface IState {
  loginData: ILoginData;
}

export type getSessionRoleType = (state: IState) => string;
export type getSessionNameType = (state: IState) => string;
export type getSessionEmailType = (state: IState) => string;
export type getImageProfileType = (state: IState) => string;
export type getIsAuthenticatedType = (state: IState) => boolean;
export type getAccessTokenType = (state: IState) => string;
export type getCountryISOCodeType = (state: IState) => string;
export type getPermissionsType = (state: IState) => any;
export type getIsRoleType = (state: IState) => boolean;

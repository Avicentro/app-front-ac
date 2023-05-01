export interface ILoginData {
  access_token: string;
  user: string;
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

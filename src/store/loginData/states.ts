import { ILoginData } from "./models";

const initLogin = {
  data: {
    role: "",
    name: "",
    email: "",
    permissions: "",
    imageProfile: "",
    accessToken: "",
  },
  initialPath: "",
  isAuthenticated: false,
};

const loginData: ILoginData = initLogin;

export { initLogin };
export default loginData;

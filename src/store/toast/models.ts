export interface IToast {
  show: boolean;
  message: string;
  status: string;
}

interface IState {
  toastData: IToast;
}

export type IGetToast = (state: IState) => any;

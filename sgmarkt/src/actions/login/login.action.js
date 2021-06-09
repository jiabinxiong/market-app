import { SIGN_IN, REGISTER } from '../../actionTypes';

export const signAction = data => ({ type: SIGN_IN, data });
export const registerAction = data => ({ type: REGISTER, data });



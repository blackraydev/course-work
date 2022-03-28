import { API_ERRORS, ERROR_STATUS_CODES } from '../constants/errors';

export const getErrorByStatusCode = (status: string) => {
  switch (status) {
    case ERROR_STATUS_CODES.BAD_REQUEST_LOGIN:
      return API_ERRORS.WRONG_CREDENTIALS;
    case ERROR_STATUS_CODES.BAD_REQUEST_REGISTRATION:
      return API_ERRORS.EMAIL_EXIST;
    case ERROR_STATUS_CODES.BAD_REQUEST_VERIFY:
      return API_ERRORS.LOGIN_EXIST;
    case ERROR_STATUS_CODES.UNAUTHORIZED:
      return API_ERRORS.UNAUTHORIZED;
    default:
      return API_ERRORS.SOMETHING_WENT_WRONG;
  }
};

export enum CLIENT_ERRORS {
  PASSWORD_MIN_LENGTH = 'Password must contain at least 6 characters!',
  INCORRECT_EMAIL = 'You should enter your email! Please try again.',
  PASSWORDS_NOT_MATCH = 'Passwords not match! Please try again.',
  INCORRECT_LOGIN = 'Login must contatint at least 5 characters!',
  INCORRECT_NAME = 'Name must contatint at least 2 characters!',
  INCORRECT_LAST_NAME = 'Last name must contatint at least 3 characters!',
}

export enum API_ERRORS {
  WRONG_CREDENTIALS = 'Email or password is incorrect! Please try again.',
  EMAIL_EXIST = 'User with this email already exist! Please try another email.',
  LOGIN_EXIST = 'User with this login already exist! Please try another login',
  UNAUTHORIZED = 'You have no access to private content, please authorize.',
  SOMETHING_WENT_WRONG = 'Something went wrong... Please refresh the page.',
}

export enum ERROR_STATUS_CODES {
  BAD_REQUEST_LOGIN = '400/LOGIN',
  BAD_REQUEST_REGISTRATION = '400/REGISTRATION',
  BAD_REQUEST_VERIFY = '400/VERIFY',
  UNAUTHORIZED = '401',
  NOT_FOUND = '404',
}

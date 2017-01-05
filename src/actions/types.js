//Because the string type of action is the key which links between action and reducer
// We use this common file to define the type string and avoid the type issue
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

export const EMPLOYEE_INITIAL = 'employee_initial';
export const EMPLOYEE_UPDATE = 'employee_update';
export const EMPLOYEE_CREATE = 'employee_create';
export const EMPLOYEES_FETCH_SUCCESS = 'employees_fetch_success';
export const EMPLOYEE_SAVE_SUCCESS = 'employee_save_success';

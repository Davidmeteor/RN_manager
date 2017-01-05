import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      // make the new object which takes all properties of my existing state object
      // and throw them into this new object
      // then define the property "email", give it value as action.payload
      // and put it on top of whatever properties of the state object
      // if the state object already has the email property, it will overwrite it
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, error: '', loading: true };
    case LOGIN_USER_SUCCESS:
      //return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};

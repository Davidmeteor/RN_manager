import {
  EMPLOYEE_INITIAL,
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

//action.payload === { prop: 'name', value: 'xxx' } or
//action.payload === { prop: 'phone', value: 'xxx' } or
//action.payload === { prop: 'shift', value: 'xxx' }
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_INITIAL:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

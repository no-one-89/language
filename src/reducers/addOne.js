import { INCREMENT_NUMS } from '../actions';

function addOne(state = '', action) {
  switch(action.type) {
    case INCREMENT_NUMS :
      const i = action.index;
      return state ++
    default:
      return state;
  }
}

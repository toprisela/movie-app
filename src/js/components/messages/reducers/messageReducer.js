import { ADD_MESSAGE, DELETE_MESSAGE } from '../../../enums/actionTypes';
import uuidV4 from 'uuid/v4';

export default(state = [], action = {}) => {
    switch (action.type) {
        case ADD_MESSAGE:
          return [
              ...state,
              {
                  id: uuidV4(),
                  type: action.payload.type,
                  text: action.payload.text
              }
          ];
        case DELETE_MESSAGE:
            return state.filter(m => {
                return m.id !== action.payload
            });
        default:
            return state;
    }
} 
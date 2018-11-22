import {combineReducers} from 'redux';
import {RECEIVE_BOOKS, REQUEST_BOOKS, TEST} from "../actions/index";

const initialStateBooks = {
    libBooks: {},
    isLibLoading: false,
};

function Books(state = initialStateBooks, action) {
    switch(action.type) {
        case REQUEST_BOOKS:
            return Object.assign({}, state, {
                isLibLoading: true,
            });

        case RECEIVE_BOOKS:
            return Object.assign({}, state, {
                libBooks: action.payload,
                isLibLoading: false,
            });

        case TEST:
            alert(1);
            return Object.assign({}, state, {
                isLoading: true,
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books});
export default storeApp;
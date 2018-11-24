import {combineReducers} from 'redux';
import {OPEN_CURRENT_BOOK, RECEIVE_BOOK, RECEIVE_BOOKS, REQUEST_BOOK, REQUEST_BOOKS} from "../actions/index";

let initialStateBooks = {
    libBooks: {},
    isLibLoading: true,
    isBookLoading: true,
    currentBook: {},
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

        case REQUEST_BOOK:
            return Object.assign({}, state, {
                isBookLoading: true,
            });

        case RECEIVE_BOOK:
            return Object.assign({}, state, {
                isBookLoading: false,
                currentBook: action.payload,
            });

        case OPEN_CURRENT_BOOK:
            return Object.assign({}, state, {
                currentBook: action.payload,
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books});
export default storeApp;
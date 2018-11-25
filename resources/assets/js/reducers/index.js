import {combineReducers} from 'redux';
import {
    EMAIL_HANDLE_CHANGE,
    LOGIN_HANDLE_CHANGE,
    OPEN_CURRENT_BOOK, PASS_AGAIN_HANDLE_CHANGE, PASS_HANDLE_CHANGE,
    RECEIVE_BOOK,
    RECEIVE_BOOKS,
    REQUEST_BOOK,
    REQUEST_BOOKS
} from "../actions/index";

let initialStateBooks = {
    libBooks: {},
    isLibLoading: true,
    isBookLoading: true,
    currentBook: {},
};

let initialStateAuth = {
    login: '',
    email: '',
    password: '',
    passwordAgain: '',
    isLoginLoading: true,
    isRegLoading: true,
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
            });

        case OPEN_CURRENT_BOOK:
            return Object.assign({}, state, {
                currentBook: action.payload,
            });

        default:
            return state;
    }
}

function Auth(state = initialStateAuth, action) {
    switch(action.type) {
        case LOGIN_HANDLE_CHANGE:
            return Object.assign({}, state, {
                login: action.payload,
            });

        case EMAIL_HANDLE_CHANGE:
            return Object.assign({}, state, {
                email: action.payload,
            });

        case PASS_HANDLE_CHANGE:
            return Object.assign({}, state, {
                password: action.payload,
            });

        case PASS_AGAIN_HANDLE_CHANGE:
            return Object.assign({}, state, {
                passwordAgain: action.payload,
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books, Auth});
export default storeApp;
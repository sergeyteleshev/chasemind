import {combineReducers} from 'redux';
import {
    CONTACT_EMAIL_HANDLE_CHANGE,
    CONTACT_MESSAGE_HANDLE_CHANGE,
    CONTACT_NAME_HANDLE_CHANGE,
    CONTACT_RECEIVE,
    CONTACT_REQUEST,
    EMAIL_HANDLE_CHANGE,
    GET_MATERIAL_RECEIVE,
    GET_MATERIAL_REQUEST,
    GET_MATERIAL_SUBMIT, HIDE_BOOK_MODAL_WINDOW, HIDE_SUB_MODAL_WINDOW,
    LOGIN_HANDLE_CHANGE,
    LOGIN_INPUT_HANDLE_CHANGE,
    OPEN_CURRENT_BOOK,
    PASS_AGAIN_HANDLE_CHANGE,
    PASS_HANDLE_CHANGE,
    PASS_INPUT_HANDLE_CHANGE,
    RECEIVE_BOOK,
    RECEIVE_BOOKS,
    RECEIVE_LOGIN,
    RECEIVE_LOGOUT,
    RECEIVE_REGISTER,
    RECEIVE_SUBJECTS,
    REMEMBER_ME_HANDLE_CHANGE,
    REQUEST_BOOK,
    REQUEST_BOOKS,
    REQUEST_LOGIN,
    REQUEST_LOGOUT,
    REQUEST_REGISTER,
    REQUEST_SUBJECTS, SELECT_CURRENT_BOOK_TYPE,
    SHOW_BOOK_MODAL_WINDOW, SHOW_SUB_MODAL_WINDOW,
    SORT_BOOKS,
    SUBMIT_REGISTER
} from "../actions/index";

const initialStateBooks = {
    libBooks: {},
    isLibLoading: true,
    isBookLoading: true,
    isSubjectsLoading: true,
    currentBook: {},
    subjects: {},
    sortId: 0,
    isBookMaterialLoading: true,
    currentBookTypeSelected: '',
};

const initialStateAuth = {
    login: '',
    email: '',
    password: '',
    passwordAgain: '',
    isLoginLoading: true,
    isRegLoading: true,
    isLogoutLoading: true,
    user: {},
    loginInput: '',
    passwordInput: '',
    remember: false,
    authorized: false,
};

const initialStateEmail = {
    name: "",
    email: "",
    message: "",
    isContactLoading: true,
    contact: {},
};

const initialStateModalWindows = {
    isSubModalWindowShowing: false,
    isBookModalWindowShowing: false,
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

        case REQUEST_SUBJECTS:
            return Object.assign({}, state, {
                isSubjectsLoading: true,
            });

        case RECEIVE_SUBJECTS:
            return Object.assign({}, state, {
                isSubjectsLoading: false,
                subjects: action.payload,
            });

        case SORT_BOOKS:
            console.log("sort id:" + action.payload);
            return Object.assign({}, state, {
                sortId: action.payload,
            });

        case GET_MATERIAL_REQUEST:
            return Object.assign({}, state, {
                isBookMaterialLoading: true,
            });

        case GET_MATERIAL_RECEIVE:
            console.log('MATERIAL_RECEIVE');
            console.log(action.payload);
            return Object.assign({}, state, {
                isBookMaterialLoading: false,
            });

        case GET_MATERIAL_SUBMIT:
            console.log('MATERIAL_SUBMIT');
            return Object.assign({}, state, {
                isBookMaterialLoading: true,
            });

        case SELECT_CURRENT_BOOK_TYPE:
            console.log("currentBookType: " + action.payload);
            return Object.assign({}, state, {
                currentBookTypeSelected: action.payload,
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

        case RECEIVE_REGISTER:
            console.log(action.payload);
            return Object.assign({}, state, {
                user: action.payload,
                isRegLoading: false,
            });

        case REQUEST_REGISTER:
            return Object.assign({}, state, {
                isRegLoading: true,
            });

        case LOGIN_INPUT_HANDLE_CHANGE:
            return Object.assign({}, state, {
                loginInput: action.payload,
            });

        case PASS_INPUT_HANDLE_CHANGE:
            return Object.assign({}, state, {
                passwordInput: action.payload,
            });

        case RECEIVE_LOGIN:
            console.log('RECEIVE LOGIN');
            console.log(action.payload);
            return Object.assign({}, state, {
                user: action.payload,
                isLoginLoading: false,
                authorized: true,
            });

        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isLoginLoading: true,
            });

        case REMEMBER_ME_HANDLE_CHANGE:
            return Object.assign({}, state, {
                remember: action.payload,
            });

        case REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isLogoutLoading: true,
            });

        case RECEIVE_LOGOUT:
            console.log(action.payload);
            return Object.assign({}, state, {
                isLogoutLoading: false,
                user: {},
                authorized: false,
            });

        default:
            return state;
    }
}

function Email(state = initialStateEmail, action) {
    switch (action.type) {
        case CONTACT_NAME_HANDLE_CHANGE:
            return Object.assign({}, state, {
                name: action.payload,
            });

        case CONTACT_EMAIL_HANDLE_CHANGE:
            return Object.assign({}, state, {
                email: action.payload,
            });

        case CONTACT_MESSAGE_HANDLE_CHANGE:
            return Object.assign({}, state, {
                message: action.payload,
            });

        case CONTACT_REQUEST:
            return Object.assign({}, state, {
                isContactLoading: true,
            });

        case CONTACT_RECEIVE:
            console.log('CONTACT_RECEIVE');
            console.log(action.payload);
            return Object.assign({}, state, {
                isContactLoading: false,
                contact: action.payload,
            });

        default:
            return state;
    }
}

function ModalWindows(state = initialStateModalWindows, action) {
    switch (action.type) {
        case SHOW_BOOK_MODAL_WINDOW:
            return Object.assign({}, state, {
                isBookModalWindowShowing: true,
            });

        case HIDE_BOOK_MODAL_WINDOW:
            return Object.assign({}, state, {
                isBookModalWindowShowing: false,
            });

        case SHOW_SUB_MODAL_WINDOW:
            console.log("SUB SHOWING");
            return Object.assign({}, state, {
                isSubModalWindowShowing: true,
            });

        case HIDE_SUB_MODAL_WINDOW:
            return Object.assign({}, state, {
                isSubModalWindowShowing: false,
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books, Auth, Email, ModalWindows});
export default storeApp;
import {combineReducers} from 'redux';
import {
    CONTACT_EMAIL_HANDLE_CHANGE, CONTACT_FORM_ERROR_RESPONSE,
    CONTACT_MESSAGE_HANDLE_CHANGE,
    CONTACT_NAME_HANDLE_CHANGE,
    CONTACT_RECEIVE,
    CONTACT_REQUEST,
    EMAIL_HANDLE_CHANGE,
    GET_MATERIAL_RECEIVE,
    GET_MATERIAL_REQUEST,
    GET_MATERIAL_SUBMIT, HANDLE_MENU_MOBILE, HIDE_BOOK_MODAL_WINDOW, HIDE_SUB_MODAL_WINDOW, LOGIN_ERROR,
    LOGIN_HANDLE_CHANGE,
    LOGIN_INPUT_HANDLE_CHANGE,
    OPEN_CURRENT_BOOK,
    PASS_AGAIN_HANDLE_CHANGE,
    PASS_HANDLE_CHANGE,
    PASS_INPUT_HANDLE_CHANGE,
    RECEIVE_BOOK,
    RECEIVE_BOOKS, RECEIVE_EMAIL_CHECK,
    RECEIVE_LOGIN, RECEIVE_LOGIN_CHECK,
    RECEIVE_LOGOUT,
    RECEIVE_REGISTER, RECEIVE_ROBOKASSA,
    RECEIVE_SUBJECTS,
    REMEMBER_ME_HANDLE_CHANGE,
    REQUEST_BOOK,
    REQUEST_BOOKS, REQUEST_EMAIL_CHECK,
    REQUEST_LOGIN, REQUEST_LOGIN_CHECK,
    REQUEST_LOGOUT,
    REQUEST_REGISTER, REQUEST_ROBOKASSA,
    REQUEST_SUBJECTS, REQUEST_UPLOAD_PDF, SELECT_CURRENT_BOOK_TYPE,
    SHOW_BOOK_MODAL_WINDOW, SHOW_SUB_MODAL_WINDOW,
    SORT_BOOKS,
    SUBMIT_REGISTER, TEXT_INPUT_HANDLE_CHANGE, UPLOAD_PDF_HANDLE_CHANGE
} from "../actions/index";
import {RECEIVE_UPLOAD_PDF} from "../actions";

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
    isLoginFetchDone: true,
    isRegLoading: true,
    isLogoutLoading: true,
    user: {},
    loginInput: '',
    passwordInput: '',
    remember: true,
    authorized: false,
    loginFormErrorResponse: false,
    isLoginInputChecking: false,
    loginChecked: {},
    isEmailInputChecking: false,
    emailChecked: {},
    isRegisterSubmitted: false,
};

const initialStateEmail = {
    name: "",
    email: "",
    message: "",
    isContactLoading: true,
    contact: {},
    contactSent: false,
    contactFormErrorResponse: false,
};

const initialStateModalWindows = {
    isSubModalWindowShowing: false,
    isBookModalWindowShowing: false,
};

const initialStateSub = {
    isRobokassaLoading: false,
    robokassaResponse: {},
};

const initialStateMenuMobile = {
    isMenuMobileOpened: false,
};

const initialStateAddBook = {
    title: "",
    author: "",
    desc: "",
    slogan: "",
    sloganENG: "",
    publisher: "",
    pagesOriginal: "",
    pagesAbstarct: "",
    imgURL: "",
    pdfToUpload: {},
    pdfUploadResponse: {},
    isPdfUploading: false,
    subject: 0,
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
            return Object.assign({}, state, {
                sortId: action.payload,
            });

        case GET_MATERIAL_REQUEST:
            return Object.assign({}, state, {
                isBookMaterialLoading: true,
            });

        case GET_MATERIAL_RECEIVE:
            console.log(action.payload);
            return Object.assign({}, state, {
                isBookMaterialLoading: false,
            });

        case GET_MATERIAL_SUBMIT:
            return Object.assign({}, state, {
                isBookMaterialLoading: true,
            });

        case SELECT_CURRENT_BOOK_TYPE:
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
            return Object.assign({}, state, {
                user: action.payload,
                isLoginLoading: false,
                authorized: true,
                loginFormErrorResponse: false,
                loginInput: '',
                passwordInput: '',
                isLoginInputChecking: false,
                loginChecked: {},
                isEmailInputChecking: false,
                emailChecked: {},
                isLoginFetchDone: true,
            });

        case LOGIN_ERROR:
            console.error(action.payload);
            return Object.assign({}, state, {
                loginError: action.payload,
                isLoginLoading: false,
                loginFormErrorResponse: true,
            });

        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isLoginLoading: true,
                isLoginFetchDone: false,
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
            return Object.assign({}, state, {
                isLogoutLoading: false,
                user: {},
                authorized: false,
            });

        case REQUEST_LOGIN_CHECK:
            return Object.assign({}, state, {
                isLoginInputChecking: true,
            });

        case RECEIVE_LOGIN_CHECK:
            return Object.assign({}, state, {
                isLoginInputChecking: false,
                loginChecked: action.payload,
            });

        case REQUEST_EMAIL_CHECK:
            return Object.assign({}, state, {
                isEmailInputChecking: true,
            });

        case RECEIVE_EMAIL_CHECK:
            return Object.assign({}, state, {
                isEmailInputChecking: false,
                emailChecked: action.payload,
            });

        case SUBMIT_REGISTER:
            return Object.assign({}, state, {
                isRegisterSubmitted: true,
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
            return Object.assign({}, state, {
                isContactLoading: false,
                contactSent: true,
                contact: action.payload,
            });

        case CONTACT_FORM_ERROR_RESPONSE:
            return Object.assign({}, state, {
                contactFormErrorResponse: true,
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


function AddBookReducer(state = initialStateAddBook, action) {
    switch (action.type) {
        case TEXT_INPUT_HANDLE_CHANGE:
            return Object.assign({}, state, action.payload);

        case UPLOAD_PDF_HANDLE_CHANGE:
            return Object.assign({}, state, {
                pdfToUpload: action.payload,
            });

        case RECEIVE_UPLOAD_PDF:
            return Object.assign({}, state, {
                pdfUploadResponse: action.payload,
                isPdfUploading: false,
            });

        case REQUEST_UPLOAD_PDF:
            return Object.assign({}, state, {
                isPdfUploading: true,
                pdfUploadResponse: {},
            });

        default:
            return state;
    }
}

function Sub(state = initialStateSub, action) {
    switch(action.type) {
        case REQUEST_ROBOKASSA:
            return Object.assign({}, state, {
                isRobokassaLoading: true,
            });

        case RECEIVE_ROBOKASSA:
            return Object.assign({}, state, {
                isRobokassaLoading: false,
                robokassaResponse: action.payload,
            });


        default:
            return state;
    }
}

function MenuMobile(state = initialStateMenuMobile, action) {
    switch(action.type) {
        case HANDLE_MENU_MOBILE:
            return Object.assign({}, state, {
                isMenuMobileOpened: action.payload,
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books, Auth, Email, ModalWindows, Sub, MenuMobile, AddBookReducer});
export default storeApp;
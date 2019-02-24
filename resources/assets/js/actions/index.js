import {deleteCookie, getCookie, setCookie} from "../helpers/cookies";

export const TEXT_INPUT_HANDLE_CHANGE = "TEXT_INPUT_HANDLE_CHANGE";

export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const REQUEST_BOOK = "REQUEST_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOKS";
export const OPEN_CURRENT_BOOK = "OPEN_CURRENT_BOOK";

export const LOGIN_HANDLE_CHANGE = "LOGIN_HANDLE_CHANGE";
export const EMAIL_HANDLE_CHANGE = "EMAIL_HANDLE_CHANGE";
export const PASS_HANDLE_CHANGE = "PASS_HANDLE_CHANGE";
export const PASS_AGAIN_HANDLE_CHANGE = "PASS_AGAIN_HANDLE_CHANGE";

export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const RECEIVE_REGISTER = "RECEIVE_REGISTER";
export const SUBMIT_REGISTER = "SUBMIT_REGISTER";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const LOGIN_INPUT_HANDLE_CHANGE = "LOGIN_INPUT_HANDLE_CHANGE";
export const PASS_INPUT_HANDLE_CHANGE = "PASS_INPUT_HANDLE_CHANGE";
export const REMEMBER_ME_HANDLE_CHANGE = "REMEMBER_ME_HANDLE_CHANGE";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REQUEST_LOGIN_CHECK = "REQUEST_LOGIN_CHECK";
export const RECEIVE_LOGIN_CHECK = "RECEIVE_LOGIN_CHECK";
export const REQUEST_EMAIL_CHECK = "REQUEST_EMAIL_CHECK";
export const RECEIVE_EMAIL_CHECK = "RECEIVE_EMAIL_CHECK";

export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const SUBMIT_LOGOUT = "SUBMIT_LOGOUT";

export const REQUEST_SUBJECTS = "REQUEST_SUBJECTS";
export const RECEIVE_SUBJECTS = "RECEIVE_SUBJECTS";
export const SORT_BOOKS = "SORT_BOOKS";

export const CONTACT_NAME_HANDLE_CHANGE = "CONTACT_NAME_HANDLE_CHANGE";
export const CONTACT_EMAIL_HANDLE_CHANGE = "CONTACT_EMAIL_HANDLE_CHANGE";
export const CONTACT_MESSAGE_HANDLE_CHANGE = "CONTACT_MESSAGE_HANDLE_CHANGE";
export const CONTACT_SUBMIT = "CONTACT_SUBMIT";
export const CONTACT_REQUEST = "CONTACT_REQUEST";
export const CONTACT_RECEIVE = "CONTACT_RECEIVE";
export const CONTACT_FORM_ERROR_RESPONSE = "CONTACT_FORM_ERROR_RESPONSE";

export const GET_MATERIAL_SUBMIT = "GET_MATERIAL_SUBMIT";
export const GET_MATERIAL_REQUEST = "GET_MATERIAL_REQUEST";
export const GET_MATERIAL_RECEIVE = "GET_MATERIAL_RECEIVE";

export const SHOW_BOOK_MODAL_WINDOW = "SHOW_BOOK_MODAL_WINDOW";
export const HIDE_BOOK_MODAL_WINDOW = "HIDE_BOOK_MODAL_WINDOW";
export const SHOW_SUB_MODAL_WINDOW = "SHOW_SUB_MODAL_WINDOW";
export const HIDE_SUB_MODAL_WINDOW = "HIDE_SUB_MODAL_WINDOW";
export const SELECT_CURRENT_BOOK_TYPE = "SELECT_CURRENT_BOOK_TYPE";

export const REQUEST_ROBOKASSA = "REQUEST_ROBOKASSA";
export const RECEIVE_ROBOKASSA = "RECEIVE_ROBOKASSA";

export const HANDLE_MENU_MOBILE = "HANDLE_MENU_MOBILE";

export const REQUEST_TEXT_TO_SPEECH = "REQUEST_TEXT_TO_SPEECH";
export const RECEIVE_TEXT_TO_SPEECH ="RECEIVE_TEXT_TO_SPEECH";

export const UPLOAD_PDF_HANDLE_CHANGE = "UPLOAD_PDF_HANDLE_CHANGE";
export const REQUEST_UPLOAD_PDF = "REQUEST_UPLOAD_PDF";
export const RECEIVE_UPLOAD_PDF = "RECEIVE_UPLOAD_PDF";

export const REQUEST_ADD_BOOK = "REQUEST_ADD_BOOK";
export const RECEIVE_ADD_BOOK = "RECEIVE_ADD_BOOK";

export const REQUEST_MIND_MAP_DATA = "REQUEST_MIND_MAP_DATA";
export const RECEIVE_MIND_MAP_DATA = "RECEIVE_MIND_MAP_DATA";

export function requestBooks() {
    return {
        type: REQUEST_BOOKS,
    }
}

export function receiveBooks(books) {
    return {
        type: RECEIVE_BOOKS,
        payload: books,
    }
}

export function requestBook() {
    return {
        type: REQUEST_BOOK,
    }
}

export function receiveBook() {
    return {
        type: RECEIVE_BOOK,
    }
}

export function openCurrentBook(book) {
    return {
        type: OPEN_CURRENT_BOOK,
        payload: book,
    }
}

export function fetchBooks() {
    return dispatch => {
        dispatch(requestBooks());

        const request = async () => {
            const response = await fetch('/api/books');
            const json = await response.json();
            dispatch(receiveBooks(json));
            return json;
        };

        return request();
    }
}

export function requestMindMapData()
{
    return {
        type: REQUEST_MIND_MAP_DATA,
    }
}

export function receiveMindMapData(json)
{
    return {
        type: RECEIVE_MIND_MAP_DATA,
        payload: json,
    }
}

export function fetchMindMapData(id)
{
    return dispatch => {
        dispatch(requestMindMapData());

        const request = async () => {
            const response = await fetch('/api/getMindMapData/' + id);
            const json = await response.json();
            dispatch(receiveMindMapData(json));
            return json;
        };

        return request();
    }
}

export function fetchBook(id) {
    return dispatch => {
        dispatch(requestBook());

        const request = async () => {
            const response = await fetch('/api/book/' + id);
            const json = await response.json();
            dispatch(openCurrentBook(json));
            dispatch(receiveBook());
            return json;
        };

        return request();
    }
}

export function loginHandleChange(event) {
    return {
        type: LOGIN_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function emailHandleChange(event) {
    return {
        type: EMAIL_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passHandleChange(event) {
    return {
        type: PASS_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passAgainHandleChange(event) {
    return {
        type: PASS_AGAIN_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function requestRegister() {
    return {
        type: REQUEST_REGISTER,
    }
}

export function receiveRegister(user) {
    return {
        type: RECEIVE_REGISTER,
        payload: user,
    }
}

export function submitRegister(login, email, pass, passAgain) {

    return dispatch => {
        if (login.length > 0 && email.length > 0 && pass.length > 0 && passAgain.length > 0 && (pass === passAgain)) {
            dispatch(fetchLoginCheck(login));
            dispatch(fetchEmailCheck(email));
            dispatch(fetchRegister(login, email, pass));
        }

        return {
            type: SUBMIT_REGISTER,
        }
    };
}

export function fetchRegister(login, email, pass) {
    const payload = {
        name: login,
        email: email,
        password: pass,
    };

    return dispatch => {
        dispatch(requestRegister());
        const request = async () => {
            const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            );

            const json = await response.json();
            dispatch(receiveRegister(json));
            return json;
        };

        return request();
    };
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN,
    }
}

export function receiveLogin(user) {
    if (user.api_token) {
        setCookie("api_token", user.api_token);
    }

    if (user.remember_token) {
        setCookie("remember_token", user.remember_token);
    }

    if (user.error) {
        return {
            type: LOGIN_ERROR,
            payload: user.error,
        }
    } else {
        return {
            type: RECEIVE_LOGIN,
            payload: user,
        }
    }
}

export function submitLogin(login, pass, remember) {
    return dispatch => {
        if (login.length > 0 && pass.length > 0) {
            dispatch(fetchLogin(login, pass, remember));
        }

        return {
            type: SUBMIT_LOGIN,
        }
    };
}

export function fetchLogin(login, pass, remember) {
    const payload = {
        name: login,
        password: pass,
        remember
    };

    return dispatch => {
        dispatch(requestLogin());
        const request = async () => {
            const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            );

            const json = await response.json();
            dispatch(receiveLogin(json));
            return json;
            // dispatch(setAuthorizationToken(json.api_token));
        };

        return request();
    };
}

export function requestLoginCheck() {
    return {
        type: REQUEST_LOGIN_CHECK,
    }
}

export function receiveLoginCheck(response) {
    return {
        type: RECEIVE_LOGIN_CHECK,
        payload: response,
    }
}

export function fetchLoginCheck(name) {
    const payload = {
        name,
    };

    return dispatch => {
        dispatch(requestLoginCheck());
        const request = async () => {
            const response = await fetch('/api/checkLogin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            const json = await response.json();
            dispatch(receiveLoginCheck(json));
            return json;
        };

        return request();
    };
}

export function requestEmailCheck() {
    return {
        type: REQUEST_EMAIL_CHECK,
    }
}

export function receiveEmailCheck(response) {
    return {
        type: RECEIVE_EMAIL_CHECK,
        payload: response,
    }
}

export function fetchEmailCheck(email) {
    const payload = {
        email,
    };

    return dispatch => {
        dispatch(requestEmailCheck());
        const request = async () => {
            const response = await fetch('/api/checkEmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            const json = await response.json();
            dispatch(receiveEmailCheck(json));
            return json;
        };

        return request();
    };
}

export function loginInputHandleChange(event) {
    return {
        type: LOGIN_INPUT_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passwordInputHandleChange(event) {
    return {
        type: PASS_INPUT_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function rememberMeHandleChange(event) {
    return {
        type: REMEMBER_ME_HANDLE_CHANGE,
        payload: event.target.checked,
    }
}

export function receiveLogout(response) {
    deleteCookie('api_token');
    deleteCookie('remember_token');
    return {
        type: RECEIVE_LOGOUT,
        payload: response,
    }
}

export function requestLogout() {
    return {
        type: REQUEST_LOGOUT,
    }
}

export function fetchLogout() {
    const payload = {
        api_token: getCookie('api_token'),
    };

    return dispatch => {
        dispatch(requestLogout());
        const request = async () => {
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            const json = await response.json();
            dispatch(receiveLogout(json));
            return json;
        };

        return request();
    };
}

export function submitLogout() {

    return dispatch => {
        dispatch(fetchLogout());
        return {
            type: SUBMIT_LOGOUT,
        }
    };
}

export function fetchLoginViaApiToken(api_token)
{
    return dispatch => {
        const payload = {
            api_token,
        };

        dispatch(requestLogin());
        const request = async () => {
            const response = await fetch('/api/apiTokenLogin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            let json = await response.json();
            dispatch(receiveLogin(json));
            return json;
        };

        return request();
    }
}

export function fetchLoginViaRememberToken(rememberToken) {
    return dispatch => {
        const payload = {
            remember_token: rememberToken,
        };

        dispatch(requestLogin());
        const request = async () => {
            const response = await fetch('/api/rememberLogin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            let json = await response.json();
            dispatch(receiveLogin(json));
            return json;
        };

        return request();
    };
}

export function fetchSubjects() {
    return dispatch => {
        dispatch(requestSubjects());
        const request = async () => {
            const response = await fetch('/api/subjects', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            let json = await response.json();
            dispatch(receiveSubjects(json));

            return json;
        };

        return request();
    };
}

export function requestSubjects() {
    return {
        type: REQUEST_SUBJECTS,
    }
}

export function receiveSubjects(subjects) {
    return {
        type: RECEIVE_SUBJECTS,
        payload: subjects,
    }
}

export function sortBooks(id) {
    return {
        type: SORT_BOOKS,
        payload: id,
    }
}

export function contactNameHandleChange(event) {
    return {
        type: CONTACT_NAME_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function contactEmailHandleChange(event) {
    return {
        type: CONTACT_EMAIL_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function contactMessageHandleChange(event) {
    return {
        type: CONTACT_MESSAGE_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function requestContact() {
    return {
        type: CONTACT_REQUEST,
    }
}

export function receiveContact(contactData) {
    return {
        type: CONTACT_RECEIVE,
        payload: contactData,
    }
}

export function contactSubmit(name, email, message) {
    return dispatch => {
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            dispatch(fetchCustomerContactMessage(name, email, message));
        }

        return {
            type: CONTACT_SUBMIT,
        }
    };
}

export function showContactFormErrorResponse() {
    return {
        type: CONTACT_FORM_ERROR_RESPONSE,
    }
}

export function fetchCustomerContactMessage(name, email, message) {
    const payload = {
        name,
        email,
        message,
    };

    return dispatch => {
        dispatch(requestContact());
        const request = async () => {
            const response = await fetch('/api/emails', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const json = await response.json();
            dispatch(receiveContact(json));
            return json;
        };

        return request();
    };
}

export function requestGetMaterial() {
    return {
        type: GET_MATERIAL_REQUEST,
    }
}

export function receiveGetMaterial(contactData) {
    return {
        type: GET_MATERIAL_RECEIVE,
        payload: contactData,
    }
}

export function getMaterialSubmit(bookId, type, demo) {
    return dispatch => {
        if (bookId > 0 && type.length > 0) {
            dispatch(fetchGetMaterial(bookId, type, demo));
        }

        return {
            type: GET_MATERIAL_SUBMIT,
        }
    };
}

export function fetchGetMaterial(bookId, type, demo = false) {
    if (demo) {
        type += "Demo";
    }

    const payload = {
        id: bookId,
        type,
    };

    return dispatch => {
        dispatch(requestGetMaterial());
        const request = async () => {
            const response = await fetch('/api/getBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const filename = await dispatch(fetchBookFileName(bookId, type));
            const blob = await response.blob();
            let objectURL = URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = objectURL;
            a.download = filename;

            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();

            dispatch(receiveGetMaterial(blob));
            return blob;
        };

        try {
            return request();
        }
        catch (e) {
            receiveGetMaterial(null);
        }


    };
}

export function fetchBookFileName(bookId, type) {
    const payload = {
        id: bookId,
        type,
    };

    return dispatch => {
        dispatch(requestGetMaterial());
        const request = async () => {
            const response = await fetch('/api/getFileName', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const json = await response.json();
            dispatch(receiveGetMaterial(json));
            return json;
        };

        //todo тут много изменений делать. посмотреть потом: качает ли файлы
        return request();
    };
}

export function showBookDialog() {
    return {
        type: SHOW_BOOK_MODAL_WINDOW,
    }
}

export function hideBookDialog() {
    return {
        type: HIDE_BOOK_MODAL_WINDOW,
    }
}

export function showSubDialog() {
    return {
        type: SHOW_SUB_MODAL_WINDOW,
    }
}

export function hideSubDialog() {
    return {
        type: HIDE_SUB_MODAL_WINDOW,
    }
}

export function selectCurrentBookType(type) {
    return {
        type: SELECT_CURRENT_BOOK_TYPE,
        payload: type,
    }
}

export function fetchRobokassa(typeOfSub, user_id) {
    const payload = {
        typeOfSub,
        user_id,
    };

    return dispatch => {
        dispatch(requestRobokassa());

        const request = async () => {
            const response = await fetch('/api/payForSub', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const json = await response.json();
            dispatch(receiveRobokassa(json));
            return json;
        };

        return request();
    }
}

export function requestRobokassa() {
    return {
        type: REQUEST_ROBOKASSA,
    }
}

export function receiveRobokassa(response) {
    document.write(response);
    document.getElementsByClassName("robokassaSubmit")[0].click();

    return {
        type: RECEIVE_ROBOKASSA,
        payload: response,
    }
}

export function handleMenuMobile(state)
{
    return {
        type: HANDLE_MENU_MOBILE,
        payload: state,
    }
}

export function requestTextToSpeech()
{
    return {
        type: REQUEST_TEXT_TO_SPEECH,
    }
}

export function requestAddBook()
{
    return {
        type: REQUEST_ADD_BOOK,
    }
}

export function receiveAddBook(book)
{
    return {
        type: RECEIVE_ADD_BOOK,
        payload: book,
    }
}

export function receiveTextToSpeech(json)
{
    return {
        type: RECEIVE_TEXT_TO_SPEECH,
        payload: json,
    }
}

export function getOauthToken()
{
    return dispatch => {
        //dispatch(requestRobokassa());

        const request = async () => {
            const response = await fetch('/api/getOAuthToken', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            console.log(json);
            //dispatch(receiveRobokassa(json));
            return json;
        };

        return request();
    }
}

export function fetchTextToSpeechYandex(text) {
    const payload = {
        text
    };

    return dispatch => {
        //dispatch(requestRobokassa());

        const request = async () => {
            const response = await fetch('/api/getAudioYandex', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload),
            });
            const json = await response.json();
            console.log(json);
            //dispatch(receiveRobokassa(json));
            return json;
        };

        return request();
    }
}

export function fetchTextToSpeech(text)
{
    let url = "https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize";
    let args = {
        key: "57443385-b5ae-4d9a-9be6-98fc921e18e9",
        text,
        format: "mp3",
        lang: "ru-RU",
        speaker: "zahar",
    };

    // let str = Object.keys(args).map(function(key) {
    //     return key + '=' + args[key];
    // }).join('&');
    //
    // url += str;

    console.info(url);

    return dispatch => {
        dispatch(requestTextToSpeech());

        const request = async () => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(args),
            });

            const json = await response;
            dispatch(receiveTextToSpeech(json));
            console.info(json);
            return json;
        };

        return request();
    }
}

export function addBook(book)
{
    let formData = new FormData(book);

    const bookKeys = Object.keys(book);
    bookKeys.map((item) => {
        formData.append(item, book[item]);
    });

    console.log(book);
    console.log(formData);

    return dispatch => {
        const request = async () => {
            dispatch(requestAddBook());
            const response = await fetch('/api/addBook', {
                method: 'POST',
                body: formData,
            });

            const json = await response.json();
            dispatch(receiveAddBook(json));
        };

        return request();
    }
}

export function uploadPdfHandleChange(event)
{
    return {
        type: UPLOAD_PDF_HANDLE_CHANGE,
        payload: event.target.files[0],
    }
}

export function requestUploadPdf()
{
    return {
        type: REQUEST_UPLOAD_PDF,
    }
}

export function receiveUploadPdf(response)
{
    return {
        type: RECEIVE_UPLOAD_PDF,
        payload: response,
    }
}

export function fetchUploadPdf(pdf)
{
    let formData = new FormData();
    formData.append('pdf', pdf);

    return dispatch => {
        dispatch(requestUploadPdf());

        const request = async () => {
            const response = await fetch('/api/uploadPdf', {
                method: 'POST',
                body: formData,
            });

            const json = await response.json();
            dispatch(receiveUploadPdf(json));
            if(json.text && json.filename)
            {
                //dispatch(testFunct(json.text, json.filename));
            }

            return json;
        };

        return request();
    }
}

export function textInputHandleChange(propertyName, event)
{
    let textInputData = [];

    textInputData[propertyName] = event.target.value;
    return {
        type: TEXT_INPUT_HANDLE_CHANGE,
        payload: textInputData,
    }
}
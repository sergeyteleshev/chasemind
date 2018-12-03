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

export const GET_MATERIAL_SUBMIT = "GET_MATERIAL_SUBMIT";
export const GET_MATERIAL_REQUEST = "GET_MATERIAL_REQUEST";
export const GET_MATERIAL_RECEIVE = "GET_MATERIAL_RECEIVE";

export const SHOW_BOOK_MODAL_WINDOW = "SHOW_BOOK_MODAL_WINDOW";
export const HIDE_BOOK_MODAL_WINDOW = "HIDE_BOOK_MODAL_WINDOW";
export const SHOW_SUB_MODAL_WINDOW = "SHOW_SUB_MODAL_WINDOW";
export const HIDE_SUB_MODAL_WINDOW = "HIDE_SUB_MODAL_WINDOW";
export const SELECT_CURRENT_BOOK_TYPE = "SELECT_CURRENT_BOOK_TYPE";

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
        };

        request();
    }
}

export function fetchBook(id)
{
    return dispatch => {
        dispatch(requestBook());

        const request = async () => {
            const response = await fetch('/api/book/'+ id);
            const json = await response.json();
            dispatch(openCurrentBook(json));
            dispatch(receiveBook());
        };

        request();
    }
}

export function loginHandleChange(event)
{
    return {
        type: LOGIN_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function emailHandleChange(event)
{
    return {
        type: EMAIL_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passHandleChange(event)
{
    return {
        type: PASS_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passAgainHandleChange(event)
{
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
        if(login.length > 0 && email.length > 0 && pass.length > 0 && passAgain.length > 0 && (pass === passAgain))
        {
            dispatch(fetchRegister(login, email, pass));
        }

        return {
            type: SUBMIT_REGISTER,
        }
    };
}

export function fetchRegister(login, email, pass)
{
    const payload = {
        name: login,
        email: email,
        password: pass,
    };

    return dispatch => {
        dispatch(requestRegister());
        const request = async () => {
            const response = await fetch('/api/register',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)}
            );

            const json = await response.json();
            dispatch(receiveRegister(json));
        };

        request();
    };
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN,
    }
}

export function receiveLogin(user) {
    if(user.rem_token)
    {
        localStorage.setItem('remember_token', user.rem_token);
    }

    return {
        type: RECEIVE_LOGIN,
        payload: user,
    }
}

export function submitLogin(login, pass, remember) {
    return dispatch => {
        if(login.length > 0 && pass.length > 0)
        {
            dispatch(fetchLogin(login, pass, remember));
        }

        return {
            type: SUBMIT_LOGIN,
        }
    };
}

export function fetchLogin(login, pass, remember)
{
    const payload = {
        name: login,
        password: pass,
        remember
    };

    return dispatch => {
        dispatch(requestLogin());
        const request = async () => {
            const response = await fetch('/api/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)}
            );

            const json = await response.json();
            dispatch(receiveLogin(json));
            // dispatch(setAuthorizationToken(json.rem_token));
        };

        request();
    };
}

export function loginInputHandleChange(event)
{
    return {
        type: LOGIN_INPUT_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function passwordInputHandleChange(event)
{
    return {
        type: PASS_INPUT_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function rememberMeHandleChange(event)
{
    return {
        type: REMEMBER_ME_HANDLE_CHANGE,
        payload: event.target.checked,
    }
}

export function receiveLogout(response) {
    localStorage.removeItem('remember_token');
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

export function fetchLogout()
{
    return dispatch => {
        dispatch(requestLogout());
        const request = async () => {
            const response = await fetch('/api/logout', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            dispatch(receiveLogout(json));
        };

        request();
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

export function fetchLoginViaRememberToken(rememberToken)
{
    return dispatch => {
        const payload = {
            remember_token: rememberToken,
        };

        dispatch(requestLogin());
        const request = async () => {
            const response = await fetch('/api/rememberLogin',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            let json = await response.json();
            dispatch(receiveLogin(json));
        };

        request();
    };
}

export function fetchSubjects()
{
    return dispatch => {
        dispatch(requestSubjects());
        const request = async () => {
            const response = await fetch('/api/subjects',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            let json = await response.json();
            dispatch(receiveSubjects(json));
        };

        request();
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

export function sortBooks(id)
{
    return {
        type: SORT_BOOKS,
        payload: id,
    }
}

export function setAuthorizationToken(token) {
    if(token)
    {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else
    {
         delete axios.defaults.headers.common['Authorization'];
    }

}

export function contactNameHandleChange(event)
{
    return {
        type: CONTACT_NAME_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function contactEmailHandleChange(event)
{
    return {
        type: CONTACT_EMAIL_HANDLE_CHANGE,
        payload: event.target.value,
    }
}

export function contactMessageHandleChange(event)
{
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

export function contactSubmit(name, email, message)
{
    return dispatch => {
        if(name.length > 0 && email.length > 0 && message.length > 0)
        {
            dispatch(fetchCustomerContactMessage(name, email, message));
        }

        return {
            type: CONTACT_SUBMIT,
        }
    };
}


export function fetchCustomerContactMessage(name, email, message)
{
    const payload = {
        name,
        email,
        message,
    };

    return dispatch => {
        dispatch(requestContact());
        const request = async () => {
            const response = await fetch('/api/emails',{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const json = await response.json();
            dispatch(receiveContact(json));
        };

        request();
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

export function getMaterialSubmit(bookId, type, demo)
{
    return dispatch => {
        if(bookId > 0 && type.length > 0)
        {
            dispatch(fetchGetMaterial(bookId, type, demo));
        }

        return {
            type: GET_MATERIAL_SUBMIT,
        }
    };
}

export function fetchGetMaterial(bookId, type, demo = false)
{
    if(demo)
    {
        type += "Demo";
    }

    console.log("TYPE: " + type);

    const payload = {
        id: bookId,
        type,
    };

    console.log(payload);

    return dispatch => {
        dispatch(requestGetMaterial());
        const request = async () => {
            const response = await fetch('/api/getBook',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            //todo обработать ошбику если файла нет
            //todo чёто не работает и редиректит на главную страницу Оо
            const blob = await response.blob();
            console.log(blob);
            let objectURL = URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = objectURL;
            a.download = await dispatch(fetchBookFileName(bookId, type));
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();
        };

        request();
    };
}

export function fetchBookFileName(bookId, type)
{
    const payload = {
        id: bookId,
        type,
    };

    console.log(payload);

    return dispatch => {
        dispatch(requestGetMaterial());
        const request = async () => {
            const response = await fetch('/api/getFileName',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            const json = await response.json();
            console.log("GET MATERIAL NAME");
            console.log(json);
            return json;
        };

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
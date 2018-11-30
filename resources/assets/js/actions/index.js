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
    return {
        type: RECEIVE_LOGIN,
        payload: user,
    }
}

export function submitLogin(login, pass) {

    return dispatch => {
        if(login.length > 0 && pass.length > 0)
        {
            dispatch(fetchLogin(login, pass));
        }

        return {
            type: SUBMIT_LOGIN,
        }
    };
}

export function fetchLogin(login, pass)
{
    const payload = {
        name: login,
        password: pass,
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
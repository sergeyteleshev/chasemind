export const TEST_ACTION = "TEST_ACTION";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const REQUEST_BOOK = "REQUEST_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOKS";
export const OPEN_CURRENT_BOOK = "OPEN_CURRENT_BOOK";

export const LOGIN_HANDLE_CHANGE = "LOGIN_HANDLE_CHANGE";
export const EMAIL_HANDLE_CHANGE = "EMAIL_HANDLE_CHANGE";
export const PASS_HANDLE_CHANGE = "PASS_HANDLE_CHANGE";
export const PASS_AGAIN_HANDLE_CHANGE = "PASS_AGAIN_HANDLE_CHANGE";

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
            console.log(json);
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
            console.log(json);
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

export function fetchRegister(login, email, pass)
{
    const payload = {
        name: login,
        email: email,
        password: pass,
    };

    let data = new FormData();
    data.append( "json", JSON.stringify(payload));

    return dispatch => {
        const request = async () => {
            const response = await fetch('/api/register/', {
                method: 'POST',
                body: data,
            });
            const json = await response.json();

            console.log(json);
        };

        request();
    }
}
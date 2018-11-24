export const TEST_ACTION = "TEST_ACTION";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const REQUEST_BOOK = "REQUEST_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOKS";
export const OPEN_CURRENT_BOOK = "OPEN_CURRENT_BOOK";

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

export function receiveBook(book) {
    return {
        type: RECEIVE_BOOK,
        payload: book,
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

        fetch('/api/books').then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => {
            dispatch(receiveBooks(json))
        });
    }
}

export function fetchBook(id)
{
    return dispatch => {
        dispatch(requestBook());

        fetch('/api/book/' + id).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => {
            console.log(json);
            dispatch(receiveBook(json))
        });
    }
}


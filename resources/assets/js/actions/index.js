export const TEST_ACTION = "TEST_ACTION";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const TEST = "TEST";

export function testAction () {
    return {
        type:TEST_ACTION,
    }
}

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

export function test() {
    return {
        type: TEST,
    }
}

export function fetchBooks() {
    return dispatch => {
        console.log('request books thunk action')
        dispatch(requestBooks());

        fetch('/api/books').then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => {
            console.log(json);
            dispatch(receiveBooks(json))
        });
    }
}


import {connect} from 'react-redux';
import Book from '../components/pages/Book';
import {fetchBook} from "../actions/index";
import {getMaterialSubmit, hideBookDialog, selectCurrentBookType, showBookDialog} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        isBookLoading: state.Books.isBookLoading,
        currentBook: state.Books.currentBook,
        currentBookTypeSelected: state.Books.currentBookTypeSelected,
        isBookModalWindowShowing: state.ModalWindows.isBookModalWindowShowing,
        authorized: state.Auth.authorized,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
        getMaterialSubmit: (bookId, type) => dispatch(getMaterialSubmit(bookId, type)),
        showBookDialog: () => dispatch(showBookDialog()),
        hideBookDialog: () => dispatch(hideBookDialog()),
        selectCurrentBookType: (type) => dispatch(selectCurrentBookType(type))
    }
};

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book);

export default BookContainer;
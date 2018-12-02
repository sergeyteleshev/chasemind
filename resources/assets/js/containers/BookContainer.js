import {connect} from 'react-redux';
import Book from '../components/pages/Book';
import {fetchBook} from "../actions/index";
import {getMaterialSubmit} from "../actions";

const mapStateToProps = (state) => {
    return {
        isBookLoading: state.Books.isBookLoading,
        currentBook: state.Books.currentBook,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
        getMaterialSubmit: (bookId, type) => dispatch(getMaterialSubmit(bookId, type)),
    }
};

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book);

export default BookContainer;
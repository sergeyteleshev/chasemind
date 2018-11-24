import {connect} from 'react-redux';
import Library from '../components/pages/Library';
import {fetchBooks, openCurrentBook} from "../actions/index";

const mapStateToProps = (state) => {
    return {
        libBooks: state.Books.libBooks,
        isLibLoading: state.Books.isLibLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        openCurrentBook: (book) => dispatch(openCurrentBook(book)),
    }
};

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);

export default LibraryContainer;
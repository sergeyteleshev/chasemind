import {connect} from 'react-redux';
import Library from '../components/pages/Library';
import {fetchBooks, openCurrentBook} from "../actions/index";
import {fetchSubjects, sortBooks} from "../actions";

const mapStateToProps = (state) => {
    return {
        libBooks: state.Books.libBooks,
        isLibLoading: state.Books.isLibLoading,
        subjects: state.Books.subjects,
        sortId: state.Books.sortId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        openCurrentBook: (book) => dispatch(openCurrentBook(book)),
        fetchSubjects: () => dispatch(fetchSubjects()),
        sortBooks: (id) => dispatch(sortBooks(id)),

    }
};

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);

export default LibraryContainer;
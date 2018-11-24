import {connect} from 'react-redux';
import Library from '../components/pages/Library';
import {fetchBooks, test} from "../actions/index";

const mapStateToProps = (state) => {
    return {
        libBooks: state.Books.libBooks,
        isLibLoading: state.Books.isLibLoading,
        test: state.Books.test,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        test: () => dispatch(test()),
    }
};

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);

export default LibraryContainer;
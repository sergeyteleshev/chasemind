import {connect} from 'react-redux';
import {fetchBooks, openCurrentBook} from "../actions/index";
import Header from "../components/Header";

const mapStateToProps = (state) => {
    return {
        libBooks: state.Books.libBooks,
        isLibLoading: state.Books.isLibLoading,
        user: state.Auth.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        openCurrentBook: (book) => dispatch(openCurrentBook(book)),
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
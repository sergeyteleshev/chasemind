import {connect} from 'react-redux';
import {fetchBooks, openCurrentBook, submitLogout} from "../actions/index";
import Header from "../components/Header";
import {fetchLoginViaRememberToken} from "../actions";

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
        submitLogout: () => dispatch(submitLogout()),
        fetchLoginViaRememberToken: (token) => dispatch(fetchLoginViaRememberToken(token)),
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
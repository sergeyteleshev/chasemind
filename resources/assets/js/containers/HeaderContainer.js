import {connect} from 'react-redux';
import {fetchBooks, openCurrentBook, submitLogout} from "../actions/index";
import Header from "../components/Header";
import {
    fetchLoginViaApiToken,
    fetchLoginViaRememberToken,
    handleMenuMobile,
} from "../actions";

const mapStateToProps = (state) => {
    return {
        libBooks: state.Books.libBooks,
        isLibLoading: state.Books.isLibLoading,
        user: state.Auth.user,
        isMenuMobileOpened: state.MenuMobile.isMenuMobileOpened,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        openCurrentBook: (book) => dispatch(openCurrentBook(book)),
        submitLogout: () => dispatch(submitLogout()),
        fetchLoginViaRememberToken: (token) => dispatch(fetchLoginViaRememberToken(token)),
        fetchLoginViaApiToken: (token) => dispatch(fetchLoginViaApiToken(token)),
        handleMenuMobile: (state) => dispatch(handleMenuMobile(state)),
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
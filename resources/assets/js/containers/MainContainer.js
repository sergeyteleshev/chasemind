import {connect} from 'react-redux';
import Main from "../components/pages/Main";
import {sortBooks} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortBooks: (id) => dispatch(sortBooks(id)),
    }
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
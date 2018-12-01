import {connect} from 'react-redux';
import App from '../components/App';
import {
    fetchLoginViaRememberToken,
} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginViaRememberToken: (token) => dispatch(fetchLoginViaRememberToken(token)),
    }
};

const AppController = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppController;
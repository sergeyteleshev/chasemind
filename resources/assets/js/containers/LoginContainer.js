import {connect} from 'react-redux';
import Login from '../components/pages/Login';
import {submitLogin, loginInputHandleChange, passwordInputHandleChange} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        loginInput: state.Auth.loginInput,
        passwordInput: state.Auth.passwordInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (login, pass) => dispatch(submitLogin(login, pass)),
        loginInputHandleChange: (event) => dispatch(loginInputHandleChange(event)),
        passwordInputHandleChange: (event) => dispatch(passwordInputHandleChange(event)),
    }
};

const LoginController = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginController;
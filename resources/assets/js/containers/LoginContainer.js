import {connect} from 'react-redux';
import Login from '../components/pages/Login';
import {
    submitLogin,
    loginInputHandleChange,
    passwordInputHandleChange,
    rememberMeHandleChange,
    showLoginFormErrorResponse
} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        loginInput: state.Auth.loginInput,
        passwordInput: state.Auth.passwordInput,
        remember: state.Auth.remember,
        loginFormErrorResponse: state.Auth.loginFormErrorResponse,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (login, pass, remember) => dispatch(submitLogin(login, pass, remember)),
        loginInputHandleChange: (event) => dispatch(loginInputHandleChange(event)),
        passwordInputHandleChange: (event) => dispatch(passwordInputHandleChange(event)),
        rememberMeHandleChange: (event) => dispatch(rememberMeHandleChange(event)),
        showLoginFormErrorResponse: () => dispatch(showLoginFormErrorResponse())
    }
};

const LoginController = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginController;
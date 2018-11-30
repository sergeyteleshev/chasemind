import {connect} from 'react-redux';
import Login from '../components/pages/Login';
import {submitLogin, loginInputHandleChange, passwordInputHandleChange, rememberMeHandleChange} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        loginInput: state.Auth.loginInput,
        passwordInput: state.Auth.passwordInput,
        remember: state.Auth.remember,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (login, pass, remember) => dispatch(submitLogin(login, pass, remember)),
        loginInputHandleChange: (event) => dispatch(loginInputHandleChange(event)),
        passwordInputHandleChange: (event) => dispatch(passwordInputHandleChange(event)),
        rememberMeHandleChange: (event) => dispatch(rememberMeHandleChange(event)),
    }
};

const LoginController = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginController;
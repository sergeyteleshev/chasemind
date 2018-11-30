import {connect} from 'react-redux';
import Registration from '../components/pages/Registration';
import {loginHandleChange, emailHandleChange, passHandleChange, passAgainHandleChange, fetchRegister} from "../actions/index";
import {submitRegister} from "../actions";

const mapStateToProps = (state) => {
    return {
        login: state.Auth.login,
        email: state.Auth.email,
        password: state.Auth.password,
        passwordAgain: state.Auth.passwordAgain,
        user: state.Auth.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandleChange: (event) => dispatch(loginHandleChange(event)),
        emailHandleChange: (event) => dispatch(emailHandleChange(event)),
        passHandleChange: (event) => dispatch(passHandleChange(event)),
        passAgainHandleChange: (event) => dispatch(passAgainHandleChange(event)),
        fetchRegister: (login, email, pass) => dispatch(fetchRegister(login, email, pass)),
        submitRegister: (login, email, pass, passAgain) => dispatch(submitRegister(login, email, pass, passAgain)),
    }
};

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;
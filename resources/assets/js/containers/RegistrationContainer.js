import {connect} from 'react-redux';
import Registration from '../components/pages/Registration';
import {loginHandleChange, emailHandleChange, passHandleChange, passAgainHandleChange, fetchRegister} from "../actions/index";

const mapStateToProps = (state) => {
    return {
        login: state.Auth.login,
        email: state.Auth.email,
        password: state.Auth.password,
        passwordAgain: state.Auth.passwordAgain,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandleChange: (event) => dispatch(loginHandleChange(event)),
        emailHandleChange: (event) => dispatch(emailHandleChange(event)),
        passHandleChange: (event) => dispatch(passHandleChange(event)),
        passAgainHandleChange: (event) => dispatch(passAgainHandleChange(event)),
        fetchRegister: (login, email, pass) => dispatch(fetchRegister(login, email, pass)),
    }
};

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;
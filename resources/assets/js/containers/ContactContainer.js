import {connect} from 'react-redux';
import {contactMessageHandleChange} from "../actions/index";
import Contact from "../components/pages/Contact";
import {contactEmailHandleChange, contactNameHandleChange, contactSubmit} from "../actions";

const mapStateToProps = (state) => {
    return {
        name: state.Email.name,
        email: state.Email.email,
        message: state.Email.message,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        contactNameHandleChange: (event) => dispatch(contactNameHandleChange(event)),
        contactEmailHandleChange: (event) => dispatch(contactEmailHandleChange(event)),
        contactMessageHandleChange: (event) => dispatch(contactMessageHandleChange(event)),
        contactSubmit: (name, email, message) => dispatch(contactSubmit(name, email, message)),
    }
};

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
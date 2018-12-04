import {connect} from 'react-redux';
import {contactMessageHandleChange} from "../actions/index";
import Contact from "../components/pages/Contact";
import {contactEmailHandleChange, showContactFormErrorResponse, contactNameHandleChange, contactSubmit} from "../actions";

const mapStateToProps = (state) => {
    return {
        name: state.Email.name,
        email: state.Email.email,
        message: state.Email.message,
        contactSent: state.Email.contactSent,
        contact: state.Email.contact,
        contactFormErrorResponse: state.Email.contactFormErrorResponse,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        contactNameHandleChange: (event) => dispatch(contactNameHandleChange(event)),
        contactEmailHandleChange: (event) => dispatch(contactEmailHandleChange(event)),
        contactMessageHandleChange: (event) => dispatch(contactMessageHandleChange(event)),
        contactSubmit: (name, email, message) => dispatch(contactSubmit(name, email, message)),
        showContactFormErrorResponse: () => dispatch(showContactFormErrorResponse()),
    }
};

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
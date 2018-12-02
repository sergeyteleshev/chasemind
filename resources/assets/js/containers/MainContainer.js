import {connect} from 'react-redux';
import Main from "../components/pages/Main";
import {contactSubmit, fetchSubjects, sortBooks} from "../actions";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        subjects: state.Books.subjects,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortBooks: (id) => dispatch(sortBooks(id)),
        fetchSubjects: () => dispatch(fetchSubjects()),
        contactSubmit: (name, email, message) => dispatch(contactSubmit(name, email, message)),
    }
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
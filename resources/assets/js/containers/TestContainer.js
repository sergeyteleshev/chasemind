import {connect} from 'react-redux';
import {fetchLoginCheck, fetchTextToSpeech, testFunct} from "../actions";
import Test from "../components/pages/Test";

const mapStateToProps = (state) => {
    return {
        isRegisterSubmitted: state.Auth.isRegisterSubmitted,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginCheck: (name) => dispatch(fetchLoginCheck(name)),
        fetchTextToSpeech: (text) => dispatch(fetchTextToSpeech(text)),
        testFunct: () => dispatch(testFunct()),
    }
};

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;
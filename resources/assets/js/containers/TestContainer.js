import {connect} from 'react-redux';
import {fetchLoginCheck, fetchTextToSpeech, testFunct, uploadPdf, uploadPdfHandleChange} from "../actions";
import Test from "../components/pages/Test";

const mapStateToProps = (state) => {
    return {
        isRegisterSubmitted: state.Auth.isRegisterSubmitted,
        pdfToUpload: state.Books.pdfToUpload,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginCheck: (name) => dispatch(fetchLoginCheck(name)),
        fetchTextToSpeech: (text) => dispatch(fetchTextToSpeech(text)),
        testFunct: (text, filename) => dispatch(testFunct(text, filename)),
        uploadPdfHandleChange: (event) => dispatch(uploadPdfHandleChange(event)),
        uploadPdf: (pdf) => dispatch(uploadPdf(pdf)),
    }
};

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;
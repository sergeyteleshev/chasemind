import {connect} from 'react-redux';
import {
    fetchLoginCheck,
    fetchTextToSpeech,
    testFunct,
    fetchUploadPdf,
    uploadPdfHandleChange,
    fetchTextToSpeechYandex, getIAMtoken
} from "../actions";
import Test from "../components/pages/Test";

const mapStateToProps = (state) => {
    return {
        isRegisterSubmitted: state.Auth.isRegisterSubmitted,
        pdfToUpload: state.Books.pdfToUpload,
        pdfUploadResponse: state.Books.pdfUploadResponse,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginCheck: (name) => dispatch(fetchLoginCheck(name)),
        fetchTextToSpeech: (text) => dispatch(fetchTextToSpeech(text)),
        fetchTextToSpeechYandex: (text) => dispatch(fetchTextToSpeechYandex(text)),
        testFunct: (text, filename) => dispatch(testFunct(text, filename)),
        uploadPdfHandleChange: (event) => dispatch(uploadPdfHandleChange(event)),
        fetchUploadPdf: (pdf) => dispatch(fetchUploadPdf(pdf)),
    }
};

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;
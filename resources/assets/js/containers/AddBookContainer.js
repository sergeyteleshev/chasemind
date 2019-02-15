import {connect} from 'react-redux';
import {
    fetchLoginCheck,
    fetchTextToSpeech,
    testFunct,
    fetchUploadPdf,
    uploadPdfHandleChange,
    fetchTextToSpeechYandex, getIAMtoken
} from "../actions";
import AddBook from "../components/pages/AddBook";

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

const AddBookContainer = connect(mapStateToProps, mapDispatchToProps)(AddBook);

export default AddBookContainer;
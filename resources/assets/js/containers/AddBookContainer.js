import {connect} from 'react-redux';
import {
    fetchLoginCheck,
    fetchTextToSpeech,
    fetchUploadPdf,
    uploadPdfHandleChange,
    fetchTextToSpeechYandex, textInputHandleChange, addBook,
} from "../actions";
import AddBook from "../components/pages/AddBook";

const mapStateToProps = (state) => {
    return {
        title: state.AddBookReducer.title,
        author: state.AddBookReducer.author,
        desc: state.AddBookReducer.desc,
        slogan: state.AddBookReducer.slogan,
        sloganENG: state.AddBookReducer.sloganENG,
        publisher: state.AddBookReducer.publisher,
        pagesOriginal: state.AddBookReducer.pagesOriginal,
        pagesAbstract: state.AddBookReducer.pagesAbstract,
        imgURL: state.AddBookReducer.imgURL,
        pdfToUpload: state.AddBookReducer.pdfToUpload,
        pdfUploadResponse: state.AddBookReducer.pdfUploadResponse,
        isPdfUploading: state.AddBookReducer.isPdfUploading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginCheck: (name) => dispatch(fetchLoginCheck(name)),
        fetchTextToSpeech: (text) => dispatch(fetchTextToSpeech(text)),
        fetchTextToSpeechYandex: (text) => dispatch(fetchTextToSpeechYandex(text)),
        addBook: (book) => dispatch(addBook(book)),
        uploadPdfHandleChange: (event) => dispatch(uploadPdfHandleChange(event)),
        fetchUploadPdf: (pdf) => dispatch(fetchUploadPdf(pdf)),
        textInputHandleChange: (propertyName, event) => dispatch(textInputHandleChange(propertyName, event)),
    }
};

const AddBookContainer = connect(mapStateToProps, mapDispatchToProps)(AddBook);

export default AddBookContainer;
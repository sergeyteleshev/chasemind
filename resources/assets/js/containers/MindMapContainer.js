import {connect} from 'react-redux';
import {fetchMindMapData} from "../actions";
import MindMapComponent from "../components/pages/MindMapComponent";

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        isBookLoading: state.Books.isBookLoading,
        currentBook: state.Books.currentBook,
        currentBookTypeSelected: state.Books.currentBookTypeSelected,
        isBookModalWindowShowing: state.ModalWindows.isBookModalWindowShowing,
        authorized: state.Auth.authorized,
        mindMapData: state.Books.mindMapData,
        isMindMapLoading: state.Books.isMindMapLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMindMapData: (id) => dispatch(fetchMindMapData(id)),
    }
};

const MindMapContainer = connect(mapStateToProps, mapDispatchToProps)(MindMapComponent);

export default MindMapContainer;
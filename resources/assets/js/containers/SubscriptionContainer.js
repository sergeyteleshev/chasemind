import {connect} from 'react-redux';
import {fetchRobokassa, hideSubDialog, showSubDialog} from "../actions";
import Subscription from "../components/pages/Subscription";

const mapStateToProps = (state) => {
    return {
        isSubModalWindowShowing: state.ModalWindows.isSubModalWindowShowing,
        authorized: state.Auth.authorized,
        user: state.Auth.user,
        isRobokassaLoading: state.Sub.isRobokassaLoading,
        robokassaResponse: state.Sub.robokassaResponse,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSubDialog: () => dispatch(showSubDialog()),
        hideSubDialog: () => dispatch(hideSubDialog()),
        fetchRobokassa: (typeOfSub, user_id) => dispatch(fetchRobokassa(typeOfSub, user_id))
    }
};

const SubscriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Subscription);

export default SubscriptionContainer;
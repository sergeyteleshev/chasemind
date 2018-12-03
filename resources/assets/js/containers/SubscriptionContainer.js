import {connect} from 'react-redux';
import {hideSubDialog, showSubDialog} from "../actions";
import Subscription from "../components/pages/Subscription";

const mapStateToProps = (state) => {
    return {
        isSubModalWindowShowing: state.ModalWindows.isSubModalWindowShowing,
        authorized: state.Auth.authorized,
        user: state.Auth.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSubDialog: () => dispatch(showSubDialog()),
        hideSubDialog: () => dispatch(hideSubDialog()),
    }
};

const SubscriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Subscription);

export default SubscriptionContainer;
import { connect } from 'react-redux';
import { requestLogout } from '../../actions/session_actions';
import Greeting from './greeting';


// matching the state to the current user.
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

// maping ajax request to the correct action to dispatch
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

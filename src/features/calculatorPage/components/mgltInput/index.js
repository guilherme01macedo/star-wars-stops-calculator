import { connect } from 'react-redux';

import MgltInput from './mgltInput';
import operations from '../../redux/operations';

const mapDispatchToProps = (dispatch) => ({
  setMglt: (mglt) => dispatch(operations.setMglt(mglt)),
});

export default connect(null, mapDispatchToProps)(MgltInput);

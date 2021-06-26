
import { connect } from 'react-redux';

import CalculatorPage from './calculatorPage';
import operations from './redux/operations';

const mapDispatchToProps = (dispatch) => ({
  getStarships: () => dispatch(operations.getStarships()),
});

export default connect(null, mapDispatchToProps)(CalculatorPage);

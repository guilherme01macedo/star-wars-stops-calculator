import { connect } from 'react-redux';

import Selectors from '../../redux/selectors';
import Content from './content';

const mapStateToProps = ({ calculator }) => ({
  isLoading: calculator.starships.isLoading,
  isError: calculator.starships.isError,
  mglt: calculator.mglt,
  starships: Selectors.getStarships(calculator),
});

export default connect(mapStateToProps, null)(Content);

import React from 'react';
import PropTypes from 'prop-types';

class CalculatorPage extends React.Component {
 async componentDidMount() {
    const {
      getStarships,
    } = this.props;
    getStarships();
  }

  render() {
    return (
      "content jhere"
    );
  }
}

CalculatorPage.propTypes = {
  getStarships: PropTypes.func,
};

CalculatorPage.defaultProps = {
  getStarships: () => {},
};

export default CalculatorPage;

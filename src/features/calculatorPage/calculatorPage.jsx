import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../features/commonComponents/title';
import MgltInput from './components/mgltInput';

import { IoMdPlanet } from "react-icons/io";

import './calculatorPage.scss';

class CalculatorPage extends React.Component {
  async componentDidMount() {
    const {
      getStarships,
    } = this.props;
    getStarships();
  }

  render() {
    return (
      <div className="calculator-page__container">
        <Title className="calculator-page_header">
          Stop calculator for your journey
          <IoMdPlanet className="calculator-page_header-icon" />
        </Title>
        <div className="calculator-page_input">
          <MgltInput />
        </div>
        <div className="calculator-page_content">
          a
        </div>
      </div>
    );
  }
}

CalculatorPage.propTypes = {
  getStarships: PropTypes.func,
};

CalculatorPage.defaultProps = {
  getStarships: () => { },
};

export default CalculatorPage;

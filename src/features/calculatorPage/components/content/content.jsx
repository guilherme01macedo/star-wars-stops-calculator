import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FiAlertCircle } from 'react-icons/fi';
import { GiLightSabers } from 'react-icons/gi';

import StarshipRow from './starshipRow';

import './content.scss';


const Content = ({
  mglt, isLoading, isError, starships
}) => {
  if (!mglt || mglt === "") {
    return (
      <div className="content-container_empty">
        <GiLightSabers color="inherit" size="100px" style={{ marginBottom: 16 }} />
        Type the distance in MGLT and discover how many stops you will need to make in your journey
      </div>
    );
  }

  if (isError) {
    return (
      <div className="content-container_error">
        <FiAlertCircle style={{ height: '60px', width: '60px', marginBottom: 8 }} />
        something went wrong try again later
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="content-container_loading">
        <CircularProgress color="inherit" size="40px" />
      </div>
    );
  }

  return (
    <div className="content-container_content">
      <div className="content-container_content-header">
        <div className="content-container_content-header-name">
          Starship name
        </div>
        <div className="content-container_content-header-time">
          Duration of the travel
        </div>
        <div className="content-container_content-header-stops">
          Number of stops
        </div>
      </div>
      <div className="content-container_content-list">
        {(starships || []).map((starship, index) => (
          <StarshipRow starship={starship} key={index}/>
        ))}
      </div>
    </div>
  );
};

Content.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  mglt: PropTypes.string,
  starships: PropTypes.array,
};

Content.defaultProps = {
  isLoading: false,
  isError: false,
  mglt: null,
  starships: [],
};

export default Content;

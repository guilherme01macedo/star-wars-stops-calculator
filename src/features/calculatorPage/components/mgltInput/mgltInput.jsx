import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../commonComponents/input';
import Button from '../../../commonComponents/button';

import { IoIosRocket} from "react-icons/io";

import './mgltInput.scss';

const MgltInput = ({
  setMglt,
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="mglt-input_container">
      <div className="mglt-input_container-input">
        <Input placeholder="Distance in MGLT" value={value} setValue={setValue} type="number"/>
      </div>
      <div className="mglt-input_container-calculate">
      <Button
        disabled={value === ""}
        onClick={() => setMglt(value)}
      >
        Calculate
        <IoIosRocket style={{fill: 'black', height: '20px', width: '20px', marginLeft: 8}} />
      </Button>
      </div>
    </div>
  );
}

MgltInput.propTypes = {
  setMglt: PropTypes.func,
};

MgltInput.defaultProps = {
  setMglt: () => { },
};

export default MgltInput;

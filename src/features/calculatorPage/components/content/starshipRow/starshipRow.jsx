import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import './starshipRow.scss';


const ExpandedItem = ({
  title, description, className
}) => (
  <div className={`startship-row_container-expanded-item-container ${className}`}>
    <div className="startship-row_container-expanded-title">
      {title}
    </div>
    <div className="startship-row_container-expanded-description">
      {description}
    </div>
  </div>
);


const Content = ({
  starship
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (isExpanded) {
    return (
      <div className="startship-row_container-expanded">
        <div className="startship-row_container-expanded-name">
          {starship.name}
        </div>
        <div className="startship-row_container-expanded-time">
          {starship.totalDuration}
        </div>
        <div className="startship-row_container-expanded-stops">
          {starship.stops}
        </div>
        <div className="startship-row_container-expanded-details">
          <MdExpandLess onClick={() => setIsExpanded(false)} style={{ height: '23px', width: '23px', cursor: 'pointer' }} />
        </div>

        <ExpandedItem title="Model" description={starship.model} className="startship-row_container-expanded-model"/>
        <ExpandedItem title="Manufacturer" description={starship.manufacturer} className="startship-row_container-expanded-manufacterer"/>
        <ExpandedItem title="Cost" description={`${starship.cost_in_credits} credits`} className="startship-row_container-expanded-cost"/>
        <ExpandedItem title="Length " description={`${starship.length} meters`} className="startship-row_container-expanded-length"/>
        <ExpandedItem title="Max. speed" description={starship.max_atmosphering_speed} className="startship-row_container-expanded-maxSpeed"/>
        <ExpandedItem title="Crew" description={starship.crew} className="startship-row_container-expanded-crew"/>
        <ExpandedItem title="Passengers" description={starship.passengers} className="startship-row_container-expanded-passengers"/>
        <ExpandedItem title="Capacity" description={starship.cargo_capacity} className="startship-row_container-expanded-capacity"/>
        <ExpandedItem title="Consumables" description={starship.consumables} className="startship-row_container-expanded-consumables"/>
        <ExpandedItem title="Rating" description={starship.hyperdrive_rating} className="startship-row_container-expanded-rating" />
        <ExpandedItem title="Speed" description={`${starship.MGLT} MGLTS`} className="startship-row_container-expanded-speed"/>
        <ExpandedItem title="Class" description={starship.starship_class} className="startship-row_container-expanded-class"/>
      </div>
    );
  }

  return (
    <div className="startship-row_container">
      <div className="startship-row_container-name">
        {starship.name}
      </div>
      <div className="startship-row_container-time">
        {starship.totalDuration}
      </div>
      <div className="startship-row_container-stops">
        {starship.stops}
      </div>
      <div className="startship-row_container-details">
        <MdExpandMore onClick={() => setIsExpanded(true)} style={{ height: '23px', width: '23px', cursor: 'pointer' }} />
      </div>
    </div>
  );
}


Content.propTypes = {
  starship: PropTypes.object,
};

Content.defaultProps = {
  starship: null,
};

export default Content;

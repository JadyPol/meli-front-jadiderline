import React from 'react';

import './loader-results.component.scss';

// Component user when the results service is loading
const LoaderResultComponent = ({ quantity }) => {
  const items = [];
  for (let index = 0; index < quantity; index++) {
    items.push(
      <div key={index} data-testid={`placeholder-${index}`} className="placeholder">
        <div className="image-placeholder"></div>
        <div className="content-placeholder">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="loader-results-cont">
      {items}
    </div>
  );
}

export default LoaderResultComponent;

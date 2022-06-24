import React from 'react';

import './detail-placeholder.component.scss';

// Compnent use when the product detail service is loading
const DetailPlaceholderComponent= () => {
  return (
    <div className="loader-detail-cont" data-testid="loader-detail">
      <div className="detail-placeholder">
        <div className="image-detail-placeholder"></div>
        <div className="content-detail-placeholder">
          <div></div>
          <div></div>
          <div></div>
          <div className="separator"></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="description-placeholder-detail">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default DetailPlaceholderComponent;

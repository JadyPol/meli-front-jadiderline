import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './product-card.component.scss';

import { currencyFormatterMapper } from '../../../../mappers/currency-formatter.mapper';

const ProductCardComponent = (props) => {
  // Access to the history instance that you may use to navigate.
  let history = useHistory();
  const { productPrice, priceCurrency, productImage, productId, productName, productLocation, isFreeShipping } = props;
  // Create detail Url
  const urlProduct = () => `/items/${productId}`;
  return (
    <div className="product-card-cont-ext" data-testid={`product-card-${productId}`} onClick={() => history.push(urlProduct())}>
      <div className="product-image-cont">
        <a className="image-href">
          <img src={productImage} alt={productName}></img>
        </a>
      </div>
      <div className="product-info-cont">
        <div className="product-space-info">
          <div className="price-cont">
            <span className="price-value">{currencyFormatterMapper(productPrice, priceCurrency)}</span>
            {
              !!isFreeShipping && (<span className="shipping-icon"> </span>)
            }
          </div>
          <a className="product-href">
            <div className="product-into-detail">
              <h2>{productName}</h2>
            </div>
          </a>
        </div>
        <div className="location-cont">
          <span className="address-location-name">{productLocation}</span>
        </div>
      </div>
    </div>
  );
}

ProductCardComponent.propTypes = {
  productPrice: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  pricePrecision: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productLocation: PropTypes.string.isRequired,
  isFreeShipping: PropTypes.bool.isRequired
};

export default ProductCardComponent;

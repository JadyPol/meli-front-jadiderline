import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { PRODUCT_DETAIL_ACTIONS } from './store/actions/product-detail.actions';
import { currencyFormatterMapper } from '../../mappers/currency-formatter.mapper';
import { productDetailSeoHelper } from '../../helpers/product-detail-seo.herlper';

import './product-detail.container.scss';

const BreadcrumbsComponent = React.lazy(() => import('../../shared/breadcrumbs/breadcrumbs.component'));
const DetailPlaceholderComponent = React.lazy(() => import('./components/detail-placeholder/detail-placeholder.component'));
const MetaComponent = React.lazy(() => import('../../shared/meta/meta.component'));

const { fetchProductDetailEffect } = PRODUCT_DETAIL_ACTIONS;

class ProductDetailContainer extends React.Component {

  componentDidMount() {
    // Ge product's detail by service
    this.props.fetchProductDetailEffect({ productId: this.props.match.params.id });
    this.onClickBuy = this.onClickBuy.bind(this);
  }

  render() {
    const { condition, description, picture, price, sold_quantity, title, categories, isLoadingDetail, permalink } = this.props;
    let template;
    if (!isLoadingDetail) {
      template = <section>
        <div className="breadcrumbs-results-cont">
          {
            !!categories && (<BreadcrumbsComponent categories={categories} />)
          }
        </div>
        <div className="product-detail-cont-info">
          <div className="detail-header-cont">
            <div className="image-cont">
              <img src={picture} alt={title}></img>
            </div>
            <div className="product-detail-info">
              {
                !!sold_quantity ?
                  (<span className="type-sold-out">{condition} - {sold_quantity} Vendidos</span>) :
                  (<span className="type-sold-out">{condition}</span>)
              }
              <h1>{title}</h1>
              <div className="price-value">{currencyFormatterMapper(price?.amount, price?.currency, price?.decimals)}</div>
              <div className="btn-pay-cont">
                <a href={permalink} target="_blank" rel="noreferrer">
                  <button className="pay-btn">Comprar</button>
                </a>
              </div>
            </div>
          </div>
          <div className="product-detail-description">
            <h2>Descripción del producto</h2>
            {description.split('\n').map((descpt, index) => {
              return <p key={index}>{descpt}</p>
            })}
          </div>
        </div>
        <MetaComponent
          jsonLd={productDetailSeoHelper({ condition, description, picture, price, sold_quantity, title, categories, isLoadingDetail, permalink })}
          title={title} />
      </section>;
    } else {
      template = <DetailPlaceholderComponent />;
    }
    return (
      <div className="app-product-detail-cont">
        {template}
      </div>
    );
  }

  onClickBuy() {
    if (!!this.props.permalink)
      window.open(this.props.permalink, '_blank');
  }
}

ProductDetailContainer.propTypes = {
  productPrice: PropTypes.string,
  productType: PropTypes.string,
  soldOut: PropTypes.number,
  productName: PropTypes.string,
  productImage: PropTypes.string,
  productDescription: PropTypes.string,
  permalink: PropTypes.string
};

const mapStateToProps = state => {
  const { productDetailModule } = state;
  const { productDetail, isLoadingDetail } = productDetailModule;
  const { item, categories } = productDetail;
  if (!!item) {
    const { condition, description, picture, price, sold_quantity, title, permalink } = item;
    return { condition, description, picture, price, sold_quantity, title, categories, permalink, isLoadingDetail };
  } else return { ...state, isLoadingDetail: true };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetailEffect: props => {
      dispatch(fetchProductDetailEffect(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetailContainer));

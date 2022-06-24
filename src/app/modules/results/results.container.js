import React from 'react';
import { connect } from 'react-redux';

import { RESULTS_ACTIONS } from './store/actions/results.actions';
import { queryStringParamsMapper } from '../../mappers/query-string.mapper';
import { resultsSeoHelper, aboutSeoMessage } from '../../helpers/results-seo.herlper';

import './results.container.scss';

const BreadcrumbsComponent = React.lazy(() => import('../../shared/breadcrumbs/breadcrumbs.component'));
const ProductCardComponent = React.lazy(() => import('./components/product-card/product-card.component'));
const LoaderResultComponent = React.lazy(() => import('./components/loader-results/loader-results.component'));
const MetaComponent = React.lazy(() => import('../../shared/meta/meta.component'));

const { fetchResultsByQueryEffect } = RESULTS_ACTIONS;

class ResultsContainer extends React.Component {

  componentDidMount() {
    const queryStringParams = this.queryStringParams();
    if (queryStringParams.length > 1) {
      this.props.fetchResultsByQueryEffect({ queryStringParams: this.queryStringParams() });
    } else {
      this.props.history.push({ pathname: '/' })
    }
  }

  render() {
    const { isLoadingResults } = this.props;
    let template;
    if (!isLoadingResults) {
      template = <section>
        <div className="breadcrumbs-results-cont">
          <BreadcrumbsComponent categories={this.props.categories} />
        </div>
        <div className={`product-list-cont-reuslts ${ !this.props.items?.length ? 'no-results' : ''}`}>
          {
            !!this.props.items?.length ? (
              this.props.items?.map(item => {
                return (
                  <ProductCardComponent
                    key={item.id}
                    productPrice={item.price.amount}
                    priceCurrency={item.price.currency}
                    pricePrecision={item.price.decimals}
                    productImage={item.picture}
                    productId={item.id}
                    productName={item.title}
                    productLocation={item.address}
                    isFreeShipping={item.free_shipping} />
                );
              })
            ) : (
              <div className='no-result-label-cont'>
                <span className='no-result-label'>
                  No se encontraron resultados para tu busqueda.
                </span>
              </div>
            )
          }
        </div>
        <MetaComponent jsonLd={resultsSeoHelper(window.location.href, this.getSearchParamsValue())} title={this.seoTitle()} />
      </section>;
    } else {
      template = <LoaderResultComponent quantity={4} />;
    }
    return (
      <div className="app-result-cont">
        {template}
      </div>
    );
  }

  getSearchQuery() {
    return new URLSearchParams(window?.location?.search)?.get('search');
  }

  getCategoryQuery() {
    return new URLSearchParams(window?.location?.search)?.get('category');
  }

  queryStringParams() {
    // Get search query in Url
    const search = this.getSearchQuery();
    // Get Category in Url
    const category = this.getCategoryQuery();
    // Return params
    return queryStringParamsMapper(search, category)
  }

  getSearchParamsValue() {
    const search = this.getSearchQuery();
    const category = this.getCategoryQuery();
    const base = !!search ? search : category ? category : '';
    return base.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

  seoTitle() {
    const valueTitle = this.getSearchParamsValue();
    return `${valueTitle} - ${aboutSeoMessage(valueTitle)}`;
  }
}

const mapStateToProps = state => {
  const { resultsModule } = state;
  const { results, isLoadingResults } = resultsModule;
  const { categories, items } = results;
  return { categories, items, isLoadingResults };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResultsByQueryEffect: props => {
      dispatch(fetchResultsByQueryEffect(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

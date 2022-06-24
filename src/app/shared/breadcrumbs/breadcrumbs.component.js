import React from 'react';
import PropTypes from 'prop-types';

import { breadcrumbListSeoHelper } from '../../helpers/dreadcrumb-seo.herlper';

import './breadcrumbs.component.scss';

import MetaComponent from '../../shared/meta/meta.component';

const BreadcrumbsComponent = ({ categories }) => {
  // Get Url to Result Page by category search.
  const urlCategory = category => `/items?category=${category}`;
  return (
    <div className="breadcrumbs-cont-ext">
      <div className="breadcrumbs-items">
        {
          categories?.map((category, index) => {
            return (
              <span key={`${category.id}-${index}`}>
                <a className="item-breadcrumb" data-testid={`breadcrumb-${category.id}-${index}`} href={urlCategory(category.id)}>{category.name}</a>
                {
                  index !== categories.length - 1 && <span className="item-breadcrumbs-separator">{'>'}</span>
                }
              </span>
            );
          })
        }
      </div>
      <MetaComponent jsonLd={breadcrumbListSeoHelper(categories)} />
    </div>
  );
}

BreadcrumbsComponent.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default BreadcrumbsComponent;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import BreadcrumbsComponent from './breadcrumbs.component';

const MOC_CATEGORIES = [
  {
    "name": "Consolas y Videojuegos",
    "id": "MLA1144"
  },
  {
    "name": "Consolas",
    "id": "MLA438566"
  }
];

describe('BreadcrumbsComponentt', () => {

  it('Render', () => {
    render(<BreadcrumbsComponent categories={MOC_CATEGORIES} />);
    MOC_CATEGORIES.forEach((category, index) => {
      expect(screen.queryAllByTestId(`breadcrumb-${category.id}-${index}`).length).toEqual(1);
    });
  });

  it('Test click event all elements', () => {
    render(<BreadcrumbsComponent categories={MOC_CATEGORIES} />);
    MOC_CATEGORIES.forEach((category, index) => {
      const testId = `breadcrumb-${category.id}-${index}`;
      const breadcrumb = screen.getByTestId(testId);
      fireEvent.click(breadcrumb);
    });
  });

});

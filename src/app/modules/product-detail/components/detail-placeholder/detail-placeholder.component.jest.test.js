import React from 'react';
import { render, screen } from '@testing-library/react';

import DetailPlaceholderComponent from './detail-placeholder.component';

describe('DetailPlaceholderComponent', () => {

  it('Render', () => {
    render(<DetailPlaceholderComponent />);
    expect(screen.queryAllByTestId('loader-detail').length).toEqual(1);
  });

});

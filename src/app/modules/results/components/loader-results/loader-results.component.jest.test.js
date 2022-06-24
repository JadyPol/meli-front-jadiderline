import React from 'react';
import { render, screen } from '@testing-library/react';

import LoaderResultComponent from './loader-results.component';

describe('LoaderResultComponent', () => {

  it('Render', () => {
    render(<LoaderResultComponent quantity={10} />);
    for (let index = 0; index < 10; index++) {
      expect(screen.queryAllByTestId(`placeholder-${index}`).length).toEqual(1);
    }
  });

});

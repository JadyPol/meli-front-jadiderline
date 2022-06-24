import React from 'react';
import { render, screen } from '@testing-library/react';

import JsonLdComponent from './jsonLD.component';

const LD_MOCK = {
  "@context": "http://schema.org/",
  "@graph": [
    {
      "@type": "SearchResultsPage",
      "id": 'http://localhost:3000/items?q=NINTENDO',
      "name": 'NINTENDO',
      "about": 'Encuentra lo que buscas para NINTENDO'
    },
  ]
};

describe('JsonLdComponent', () => {

  it('Render', () => {
    render(<JsonLdComponent data={LD_MOCK} />);
    expect(screen.queryAllByTestId(`jsonLD`).length).toEqual(1);
  });
  
});

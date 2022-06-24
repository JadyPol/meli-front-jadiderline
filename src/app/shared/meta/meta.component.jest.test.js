import React from 'react';
import { render } from '@testing-library/react';

import MetaComponent from './meta.component';

const MOC_QUERY = 'NINTENDO';
const MOC_ABOUT = `Encuentra lo que buscas para ${MOC_QUERY}`;
const LD_MOCK = {
  "@context": "http://schema.org/",
  "@graph": [
    {
      "@type": "SearchResultsPage",
      "id": `http://localhost:3000/items?q=${MOC_QUERY}`,
      "name": MOC_QUERY,
      "about": MOC_ABOUT
    },
  ]
};

describe('MetaComponent', () => {

  it('Render with title', () => {
    const title = `${MOC_QUERY} - ${MOC_ABOUT}`;
    render(<MetaComponent title={title} />);
    expect(document.querySelector(`meta[name='title']`).content).toBe(title);
  });

  it('Render with JsonLD', () => {
    render(<MetaComponent jsonLd={LD_MOCK} />);
    expect(!!document.querySelector(`script[data-testid='jsonLD']`)).toEqual(true);
  });

});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ProductCardComponent from './product-card.component';

const MOCK_ITEMS = [
  {
    "id": "MLA919288760",
    "title": "Consola Nintendo Switch Lite 32gb Portable Original",
    "price": {
      "currency": "ARS",
      "amount": 55999,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_873347-MLA46911069901_072021-O.jpg",
    "condition": "Nuevo",
    "free_shipping": true,
    "address": "Capital Federal"
  },
  {
    "id": "MLA1118979817",
    "title": "Nintendo Switch Oled 64gb Standard  Color Blanco Y Negro",
    "price": {
      "currency": "ARS",
      "amount": 119076,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_625423-MLA47920375564_102021-I.jpg",
    "condition": "Nuevo",
    "free_shipping": true,
    "address": "Buenos Aires"
  },
  {
    "id": "MLA1143874702",
    "title": "Nintendo Switch Lite 32gb Standard  Color Amarillo",
    "price": {
      "currency": "ARS",
      "amount": 54454,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_688681-MLA40176282269_122019-I.jpg",
    "condition": "Nuevo",
    "free_shipping": true,
    "address": "Capital Federal"
  },
  {
    "id": "MLA776768561",
    "title": "Consolas Nintendo Switch Lite 32gb Nueva Entrega Inmediata",
    "price": {
      "currency": "ARS",
      "amount": 54999,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_966389-MLA46809448844_072021-O.jpg",
    "condition": "Nuevo",
    "free_shipping": true,
    "address": "Capital Federal"
  }
]

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('ProductCardComponent', () => {

  it('Render', () => {
    MOCK_ITEMS.forEach((item) => {
      render(
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
      expect(screen.queryAllByTestId(`product-card-${item.id}`).length).toEqual(1);
    });
  });

  it('Test click event all elements', () => {
    MOCK_ITEMS.forEach((item) => {
      render(
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
      const testId = `product-card-${item.id}`;
      const card = screen.getByTestId(testId);
      fireEvent.click(card);
    });
  });

});

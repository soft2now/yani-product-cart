import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { products } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamento con el titulo personalizado', () => {
    const wrapper = render.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto.', () => {
    const wrapper = render.create(
    <ProductCard product={products[0]}>
       {
         () => (
            <ProductTitle />
         )
       }
    </ProductCard>);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

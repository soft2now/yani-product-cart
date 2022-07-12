import React from 'react';
import render from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { products } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamento con la imagen personalizada', () => {
    const wrapper = render.create(
      <ProductImage img="https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen del producto.', () => {
    const wrapper = render.create(
      <ProductCard product={products[2]}>{() => (
        <ProductImage />
      )}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

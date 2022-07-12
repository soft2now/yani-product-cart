import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { products } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('Debe de mostrar el componente correctamente.', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
        {() => <h1>Hola mundo</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe incrementar el contador.', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>Count: {count}</span>
            <button onClick={() => increaseBy(+1)}>+1</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[1]).toBe('1');
  });
});

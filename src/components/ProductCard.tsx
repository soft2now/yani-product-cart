import React,{ createContext, CSSProperties } from "react";
import useProduct from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  className,
  onChange,
  product,
  value,
  style,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, reset, isMaxCountReached } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

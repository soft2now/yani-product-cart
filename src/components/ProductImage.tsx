import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToshow: string;

  if (img) {
    imgToshow = img;
  } else if (product?.img) {
    imgToshow = product.img;
  } else {
    imgToshow =
      'https://static.wikia.nocookie.net/otonari-no-tenshi/images/c/c9/No_images_available.jpg/revision/latest?cb=20220104141308';
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToshow}
      alt="product"
    />
  );
};

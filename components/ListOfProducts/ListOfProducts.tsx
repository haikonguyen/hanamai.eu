import React from 'react';
import { products } from './products';
import { ProductCard } from '@components';

export const ListOfProducts = () => {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl.src}
          />
        );
      })}
    </>
  );
};

import React, { FC } from 'react';
import intl from 'react-intl-universal';

type ProductListType = {
  aa?: any;
}

const ProductList: FC<ProductListType> = (props) => {
  const { aa } = props;
  return (
    <div>22</div>
  );
};
export default ProductList;

import React from 'react';
import ProductPayment from './ProductPayment';


const Product: React.FC = () => {
  const products = [
    {
      id: 1,
      img: 'https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp',
      name: 'Sản phẩm 1',
      color: 'Đen',
      size: 'M',
      price: 100000,
      quantity: 2,
    },
    {
      id: 2,
      img: 'https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp',
      name: 'Sản phẩm 2',
      color: 'Trắng',
      size: 'L',
      price: 150000,
      quantity: 1,
    },
    {
        id: 3,
        img: 'https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp',
        name: 'Sản phẩm 2',
        color: 'Trắng',
        size: 'L',
        price: 150000,
        quantity: 1,
      },
  ];

  return (
    <div  style={{width:"100%"}}>
   
      <ProductPayment products={products} />
     
    </div>
  );
};

export default Product;
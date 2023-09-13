import React from "react";
import ProductPayment from "./ProductPayment";
import { useSelector } from "react-redux";

const Product: React.FC = () => {
  const dataFromCart = useSelector((state: any) => state.cartItemReduceer);
  console.log(dataFromCart);
  const products = [
    {
      id: 1,
      img: "https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp",
      name: "Sản phẩm 1",
      color: "Đen",
      size: "M",
      price: 100000,
      quantity: 2,
    },
    {
      id: 2,
      img: "https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp",
      name: "Sản phẩm 2",
      color: "Trắng",
      size: "L",
      price: 150000,
      quantity: 1,
    },
    {
      id: 3,
      img: "https://canifa.com/img/486/733/resize/8/t/8ts23s008-sg179-1.webp",
      name: "Sản phẩm 2",
      color: "Trắng",
      size: "L",
      price: 150000,
      quantity: 1,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <ProductPayment products={dataFromCart} />
    </div>
  );
};

export default Product;

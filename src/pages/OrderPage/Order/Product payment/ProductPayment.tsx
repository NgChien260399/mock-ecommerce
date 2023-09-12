import React from 'react';
import styles from './ProductPayment.module.css';

interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface FormProps {
  products: Product[];
}

const ProductPayment: React.FC<FormProps> = ({ products }) => {
  return (
    <div className={styles.formContainer}>
      <h5>Sản Phẩm </h5>
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <div className={styles.productContainer}>
            <img
              src={product.img}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productInfo}>
                 {product.color} |  {product.size}
              </p>
              <div className={styles.priceQuantityContainer}>
                <div className={styles.flexContainer}>
                  <p className={styles.price}>Giá: {product.price}đ</p>
                  <div className={styles.center}></div>
                </div>
                <p className={styles.quantity}>Số lượng: {product.quantity}</p>
              </div>
            </div>
          </div>
          {index !== products.length - 1 && products.length > 1 && (
            <hr className={styles.separator} />
          )} 
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductPayment;
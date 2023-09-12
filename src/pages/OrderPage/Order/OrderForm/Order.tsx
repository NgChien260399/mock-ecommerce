import React, { useState } from 'react';
import { toast, ToastContainer, Slide, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Order.module.css';

interface OrderDetails {
  orderValue: number;
  discount: number;
  deliveryFee: number;
  loyaltyPoints: number;
  totalAmount: number;
}

const Order: React.FC<OrderDetails> = ({
  orderValue,
  discount,
  deliveryFee,
  loyaltyPoints,
  totalAmount,
}) => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    setPaymentStatus('Thanh toán thành công');
    toast.success('Thanh toán thành công', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide, 
    });
  };

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderDetails}>
        <h5>Chi tiết đơn hàng </h5>
        <div className={styles.item}>
          <span className={styles.label}>Giá trị đơn hàng:</span>
          <span className={styles.value}>{orderValue.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Chiết khấu:</span>
          <span className={styles.value}>{discount.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Phí giao hàng:</span>
          <span className={styles.value}>{deliveryFee.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Điểm KHTT:</span>
          <span className={styles.value}>+{loyaltyPoints}</span>
        </div>
        <hr />
        <div className={styles.item}>
          <span className={styles.label1}>Tổng tiền thanh toán:</span>
          <span className={styles.value}>{totalAmount.toLocaleString()} ₫</span>
        </div>
        <button className={styles.button} onClick={handlePayment}>
          Thanh Toán
        </button>
      </div>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default Order;
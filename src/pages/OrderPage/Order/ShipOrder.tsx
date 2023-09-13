import { ReactFormik } from "./FormShip/ShipmentDetails";
import styles from "./ShipOrder.module.css";
import Payment from "./Payment/Payment";
import Product from "./Product payment/Product";
import Order from "./OrderForm/Order";
import { useSelector } from "react-redux";

const ShipOrder = () => {
  const dataFromCart = useSelector((state: any) => state.cartItemReduceer);
  const totalPrice = dataFromCart.reduce((acc: any, item: any) => {
    return acc + item.price * item.qty;
  }, 0);
  const totalPriceAfterSale = dataFromCart.reduce((acc: any, item: any) => {
    return acc + (item.sale.isSale ? item.sale.priceSale : 0) * item.qty;
  }, 0);
  return (
    <>
      <div className={styles.formContainer}>
        <div>
          <ReactFormik />

          <Payment />
          <Product />
        </div>
        <div className={styles.paymentContainer}>
          <Order
            orderValue={totalPrice}
            discount={totalPrice - totalPriceAfterSale}
            deliveryFee={0}
            loyaltyPoints={0}
            totalAmount={totalPriceAfterSale}
          />
        </div>
      </div>
    </>
  );
};

export default ShipOrder;

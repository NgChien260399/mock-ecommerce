import { ReactFormik } from "./FormShip/ShipmentDetails";
import styles from "./ShipOrder.module.css";
import Payment from "./Payment/Payment";
import Product from "./Product payment/Product";
import Order from "./OrderForm/Order";

const ShipOrder = () => {
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
            orderValue={1000}
            discount={100}
            deliveryFee={50}
            loyaltyPoints={10}
            totalAmount={950}
          />
        </div>
      </div>
    </>
  );
};

export default ShipOrder;

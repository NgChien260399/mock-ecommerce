import styles from "./HotDeal.module.css";
import ProductComponent from "./ProductComponent";
import NavBarHotDealComponent from "./NavBarHotDealComponent";


const HotDeal = () => {
  return (
    <div className={styles.wrapper}>
      <NavBarHotDealComponent />
      <ProductComponent /> 
    </div>
  );
}

export default HotDeal;


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { productData } from '../../pages/MenProductPage/ProductData';
// import { useDispatch } from "react-redux";
// import { addItemToCart } from "../../redux/actions/CartItem.action";
// import styles from "./HotDeal.module.css"
import CardComponent from './CardComponent';

const ProductComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1080, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    }
  };


  return (
    <div style={{margin: "0 -16px 0 -32px"}}>
      <Carousel responsive={responsive}>
      {productData.filter((items) => items.hotDeals).map((item, index) => (
        <CardComponent key={index}
          imageUrl={item.imageUrl}
          productName={item.productName}
          salePrice={item.salePrice}
          price={item.price}
          percentDiscount={item.percentDiscount}
          colors={item.colors}
        />
      ))}
        
      </Carousel>
    </div>
  )
}

export default ProductComponent;


import { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardComponent from './CardComponent';
// import { cardData } from '../SuggestionForU/CardData';
import { productData } from '../../pages/MenProductPage/ProductData';

const HotDealProductComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1080, min: 900 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Fragment>
      <Carousel responsive={responsive}>
      {productData.filter((items) => items.hotDeals).map((item, index) => (
        <div key={index} style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.productName}
              salePrice={item.salePrice}
              price={item.price}
              percentDiscount={item.percentDiscount}
            />
          </div>
        </div>
      ))}
        
      </Carousel>
    </Fragment>
  )
}

export default HotDealProductComponent;
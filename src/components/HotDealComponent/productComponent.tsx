
import { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardComponent from './CardComponent';
import { cardData } from '../SuggestionForU/CardData';

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
      {cardData.map((item, index) => (
        <div key={index} style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <CardComponent 
              url={item.url}
              content={item.content}
              giaTien={item.giaTien}
              giaGoc={item.giaGoc}
              giamGia={item.giamGia}
            />
          </div>
        </div>
      ))}
        
      </Carousel>
    </Fragment>
  )
}

export default HotDealProductComponent;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Divider } from "@mui/material";
import ServiceItemComponent from "../../components/ServiceComponent/ServiceComponent";
import HotDeal from "../../components/HotDealComponent/HotDeal";
import { Fragment } from "react";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Fragment>
      <Slider {...settings}>
        <CardMedia
          component="img"
          height="100%"
          image="https://media.canifa.com/Simiconnector/BannerSlider/t/o/top_desktop_2880x960.webp"
          alt="Your Image Alt Text"
        />
        <CardMedia
          component="img"
          height="100%"
          image="https://media.canifa.com/Simiconnector/BannerSlider/h/o/homepage_desktop_2880x960_1.webp"
          alt="Your Image Alt Text"
        />
        <CardMedia
          component="img"
          height="100%"
          image="https://media.canifa.com/Simiconnector/BannerSlider/t/a/tai-app-desktop.webp"
          alt="Your Image Alt Text"
        />
      </Slider>
      <ServiceItemComponent />
      <Divider />
      <HotDeal />
    </Fragment>
  );
};

export default HomePage;

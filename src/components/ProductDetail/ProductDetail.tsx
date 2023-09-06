import styles from "./ProductDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import { useState, useEffect } from "react";
import AppServices from "../../services/AppServices";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/actions/CartItem.action";
export default function ProductDetail() {
  console.log("render");

  interface data {
    id: string;
    product_name: string;
    price: number;
    imageUrl: string[];
    sizes: string[];
    colors: string[];
    category: string;
  }
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    AppServices.getUser().then((data) => {
      setData(data);
    });
  }, []);
  const dataRender = data
    .map((item) => item)
    .filter((item: data) => item.id === params.id);
  const itemRender: data = dataRender[0];
  const [currentColor, setCurrentColor] = useState('Black');
  const [currentSize, setCurrentSize] = useState('S');
  const isColorSelected = (color: string) => {
    return currentColor === color ? styles.selected : "";
  };
  const isSizeSelected = (size: string) => {
    return currentSize === size ? styles.selected : "";
  };
  let priceVN = "";
  if (itemRender) {
    priceVN = itemRender.price.toLocaleString("it-IT", {
      style: "decimal",
    });
  }
  let currentItemChoose = {};
  if (itemRender) {
    currentItemChoose = {
      id: itemRender.id,
      product_name: itemRender.product_name,
      price: itemRender.price,
      imageUrl: itemRender.imageUrl[0],
      color: currentColor,
      size: currentSize,
      qty: 1,
    };
  }

  return (
    <div>
      <div className={styles.wrap}>
        <Carousel showArrows={false} className={styles.gallery}>
          {itemRender &&
            itemRender.imageUrl.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            ))}
        </Carousel>

        <div className={styles.info_item}>
          <h1 className={styles.product_name}>
            {itemRender && itemRender.product_name}
          </h1>
          <div className={styles.product_sku}>
            <strong className={styles.type}>Mã sản phẩm: </strong>
            <div>{itemRender && itemRender.id}</div>
          </div>
          <div className={styles.price_box}>
            <span className={styles.normal_price}>
              <span className={styles.price}>{priceVN} đ</span>
            </span>
          </div>
          <div className={styles.color_box}>
            <span className={styles.color_label}>
              <span>Màu sắc: </span>
              <span style={{ fontWeight: "500" }}>{currentColor}</span>
            </span>
            <div className={styles.color_option}>
              {itemRender &&
                itemRender.colors.map((item, index) => (
                  <div
                    className={`${styles.box_wrap} ${isColorSelected(item)}`}
                    onClick={() => setCurrentColor(item)}
                    key={index}
                  >
                    <div
                      className={styles.item_color}
                      style={{ backgroundColor: item }}
                    ></div>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.size_box}>
            <span className={styles.color_label}>
              <span>Kích cỡ: </span>
              <span style={{ fontWeight: "500" }}>{currentSize}</span>
            </span>
            <div className={styles.color_option}>
              {itemRender &&
                itemRender.sizes.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.box_wrap} ${isSizeSelected(item)}`}
                    onClick={() => setCurrentSize(item)}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.product_options_actions}>
            <div className="d-grid gap-2">
              <button
                className="btn btn-warning btn-lg"
                type="button"
                onClick={() => dispatch(addItemToCart(currentItemChoose))}
              >
                Thêm vào giỏ hàng
              </button>
              <button className="btn btn-danger btn-lg" type="button">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <ServiceComponent />
    </div>
  );
}

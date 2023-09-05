import styles from "./ProductDetail.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import { useState } from "react";
export default function ProductDetail() {
  const [currentColor, setCurrentColor] = useState("Black");
  const [currentSize, setCurrentSize] = useState("");
  const isColorSelected = (color: string) => {
    return currentColor === color ? styles.selected : "";
  };
  const isSizeSelected = (size: string) => {
    return currentSize === size ? styles.selected : "";
  };
  return (
    <div>
      <div className={styles.wrap}>
        <Carousel showArrows={false} className={styles.gallery}>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w023-se249-1-thumb.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/9/h/9ha23a003-sn226-0000-1.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/9/h/9ha23a003-so227-0000-1.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w024-sk010-3.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w024-sk010-m-1-u.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w024-sk010-m-2.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w024-sk010-4.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w023-se249-1-thumb.webp" />
          </div>
          <div>
            <img src="https://canifa.com/img/1000/1500/resize/6/d/6ds23w023-se249-1-thumb.webp" />
          </div>
        </Carousel>
        <div className={styles.info_item}>
          <h1 className={styles.product_name}>
            Áo phông nữ interlock dáng ngắn tay xếp ly
          </h1>
          <div className={styles.product_sku}>
            <strong className={styles.type}>Mã sản phẩm: </strong>
            <div>6TS23W016-SK010</div>
          </div>
          <div className={styles.price_box}>
            <span className={styles.normal_price}>
              <span className={styles.price}>299.000 ₫</span>
            </span>
            <span className={styles.sale_box}>
              <span className={styles.sale_price}>169.000 ₫</span>
              <span className={styles.percent_sale}>12%</span>
            </span>
          </div>
          <div className={styles.color_box}>
            <span className={styles.color_label}>
              <span>Màu sắc: </span>
              <span style={{ fontWeight: "500" }}>{currentColor}</span>
            </span>
            <div className={styles.color_option}>
              <div
                className={`${styles.box_wrap} ${isColorSelected("Black")}`}
                onClick={() => setCurrentColor("Black")}
              >
                <div
                  className={styles.item_color}
                  style={{ backgroundColor: "black" }}
                ></div>
              </div>
              <div
                className={`${styles.box_wrap} ${isColorSelected("Red")}`}
                onClick={() => setCurrentColor("Red")}
              >
                <div
                  className={styles.item_color}
                  style={{ backgroundColor: "red" }}
                ></div>
              </div>
              <div
                className={`${styles.box_wrap} ${isColorSelected("Cyan")}`}
                onClick={() => setCurrentColor("Cyan")}
              >
                <div
                  className={styles.item_color}
                  style={{ backgroundColor: "cyan" }}
                ></div>
              </div>
              <div
                className={`${styles.box_wrap} ${isColorSelected("Green")}`}
                onClick={() => setCurrentColor("Green")}
              >
                <div
                  className={styles.item_color}
                  style={{ backgroundColor: "green" }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.size_box}>
            <span className={styles.color_label}>
              <span>Kích cỡ: </span>
              <span style={{ fontWeight: "500" }}>{currentSize}</span>
            </span>
            <div className={styles.color_option}>
              <div
                className={`${styles.box_wrap} ${isSizeSelected("S")}`}
                onClick={() => setCurrentSize("S")}
              >
                S
              </div>
              <div
                className={`${styles.box_wrap} ${isSizeSelected("M")}`}
                onClick={() => setCurrentSize("M")}
              >
                M
              </div>
              <div
                className={`${styles.box_wrap} ${isSizeSelected("L")}`}
                onClick={() => setCurrentSize("L")}
              >
                L
              </div>
            </div>
          </div>
          <div className={styles.product_options_actions}>
            <div>
              <button className={styles.btn}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
      <ServiceComponent />
    </div>
  );
}

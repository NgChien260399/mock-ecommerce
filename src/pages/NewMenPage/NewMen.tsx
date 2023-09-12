import RenderCardItem from "../../components/NewCardItem/NewCardItem";
import data from "../../../public/data-product/data.json";
import { Col, Row } from "react-bootstrap";
import styles from "./NewMen.module.css";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { useEffect } from "react";

export default function NewMenPage() {
  const listColors = [
    "Black",
    "Silver",
    "Gray",
    "White",
    "Maroon",
    "Red",
    "Purple",
    "Fuchsia",
    "Green",
    "Lime",
    "Olive",
    "Yellow",
    "Navy",
    "Blue",
    "Teal",
    "Aqua",
  ];
  const handleSliderChange = ({ min, max }: { min: number; max: number }) => {
    console.log(`min = ${min}, max = ${max}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`container-fluid ${styles.container}`}>
      <Row>
        <Col xs={3}>
          <div className={styles.cate_left}>
            <div className={styles.label}>Danh mục</div>
            <ul>
              <li>
                <button className={styles.filter_item}>Áo</button>
              </li>
              <li>
                <button>Quần</button>
              </li>
              <li>
                <button>Đồ mặc ngoài</button>
              </li>
              <li>
                <button>Đồ mặc nhà</button>
              </li>
              <li>
                <button>Đồ mặc trong</button>
              </li>
              <li>
                <button>Giá tốt</button>
              </li>
            </ul>
            <div className={styles.label}>Kích cỡ</div>
            <div className={styles.size_option}>
              <div className={styles.box_wrap}>S</div>
              <div className={styles.box_wrap}>M</div>
              <div className={styles.box_wrap}>L</div>
              <div className={styles.box_wrap}>XL</div>
              <div className={styles.box_wrap}>XXL</div>
            </div>
            <div className={styles.label}>Màu sắc</div>
            <div className={styles.color_option}>
              {listColors.map((item, index) => (
                <div key={index} className={styles.box_wrap}>
                  <div
                    className={styles.item_color}
                    style={{ backgroundColor: item }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={`${styles.label} d-none d-lg-block`}>
              Khoảng giá
            </div>
            <div style={{ position: "relative" }} className="d-none d-lg-block">
              <MultiRangeSlider
                min={0}
                max={2000000}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={9}>
          <RenderCardItem dataItem={data} itemPerRow={3} />
        </Col>
      </Row>
    </div>
  );
}

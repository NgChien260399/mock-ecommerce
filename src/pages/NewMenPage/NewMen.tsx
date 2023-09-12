import RenderCardItem from "../../components/NewCardItem/NewCardItem";
import data from "../../../public/data-product/data.json";
import { Col, Row } from "react-bootstrap";
import styles from "./NewMen.module.css";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { useEffect, useState } from "react";

export default function NewMenPage() {
  console.log('re-render');
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
    console.log(min,max);
    // setFilterSearch((prevState) => ({
    //   ...prevState,
    //   priceMinFilter: min,
    //   priceMaxFilter: max,
    // }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filterSearch, setFilterSearch] = useState({
    category: "",
    size: [],
    color: [],
    priceMinFilter: 0,
    priceMaxFilter: 2000000,
  });
  const dataFilter = data
    .map((item) => item)
    .filter((item) => {
      if (
        (filterSearch.category !== ""
          ? filterSearch.category == item.category
          : true) &&
        filterSearch.size.every((value) => item.sizes.includes(value)) &&
        filterSearch.color.every((value) => item.colors.includes(value)) &&
        (item.sale.isSale ? item.sale.priceSale : item.price) >
          filterSearch.priceMinFilter &&
        (item.sale.isSale ? item.sale.priceSale : item.price) <
          filterSearch.priceMaxFilter
      ) {
        return true;
      }
      return false;
    });
  return (
    <div className={`container-fluid  ${styles.container}`}>
      <Row>
        <Col xs={12} sm={2} md={3}>
          <div className={styles.cate_left}>
            <div className={styles.label}>Danh mục</div>
            <ul>
              <li>
                <button
                  className={styles.filter_item}
                  onClick={() =>
                    setFilterSearch((prevState) => ({
                      ...prevState,
                      category: "ao",
                    }))
                  }
                >
                  Áo
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilterSearch((prevState) => ({
                      ...prevState,
                      category: "quan",
                    }))
                  }
                >
                  Quần
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilterSearch((prevState) => ({
                      ...prevState,
                      category: "do-mac-ngoai",
                    }))
                  }
                >
                  Đồ mặc ngoài
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilterSearch((prevState) => ({
                      ...prevState,
                      category: "do-mac-nha",
                    }))
                  }
                >
                  Đồ mặc nhà
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilterSearch((prevState) => ({
                      ...prevState,
                      category: "do-mac-trong",
                    }))
                  }
                >
                  Đồ mặc trong
                </button>
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
        <Col xs={12} sm={10} md={9}>
          <RenderCardItem dataItem={dataFilter} itemPerRow={3} />
        </Col>
      </Row>
    </div>
  );
}

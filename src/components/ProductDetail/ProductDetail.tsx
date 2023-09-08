import styles from "./ProductDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import { useState, useEffect } from "react";
import AppServices from "../../services/AppServices";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/actions/CartItem.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function convertPriceVnd(props: number) {
  let newPrice;
  return (newPrice = props.toLocaleString("it-IT", {
    style: "decimal",
  }));
}
export interface data {
  id: string;
  product_name: string;
  price: number;
  sale: {
    isSale: boolean;
    priceSale: number;
  };
  imageUrl: string[];
  sizes: string[];
  colors: string[];
  category: string;
}
export default function ProductDetail() {
  const notifyError = (message: string, config: any) =>
    toast.error(message, config);
  const notifySuccess = (message: string, config: any) =>
    toast.success(message, config);
  const toastError = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };
  const toastSucess = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };
  console.log("render");

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
  const [currentColor, setCurrentColor] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const isColorSelected = (color: string) => {
    return currentColor === color ? styles.selected : "";
  };
  const isSizeSelected = (size: string) => {
    return currentSize === size ? styles.selected : "";
  };

  let currentItemChoose = {};
  if (itemRender) {
    currentItemChoose = {
      id: itemRender.id,
      product_name: itemRender.product_name,
      price: itemRender.price,
      sale: itemRender.sale,
      imageUrl: itemRender.imageUrl[0],
      color: currentColor,
      size: currentSize,
      qty: 1,
    };
  }
  const verifyAddItem = (payload: any) => {
    console.log(payload);
    if (payload.size !== "" && payload.color !== "") {
      dispatch(addItemToCart(payload));
      notifySuccess(
        `Đã thêm thành công sản phẩm ${payload.product_name} vào giỏ hàng`,
        toastSucess
      );
    }
    if (payload.size !== "" && payload.color == "") {
      notifyError("Vui lòng chọn màu  cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color !== "") {
      notifyError("Vui lòng chọn  size cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color == "") {
      notifyError("Vui lòng chọn màu và size cho sản phẩm !", toastError);
    }
  };
  return (
    <div>
      <div className={styles.breadcrumbs}>
        <ul className={styles.itembred}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/men">Nam</Link>
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
        <Carousel showArrows={false} className={styles.gallery} autoPlay infiniteLoop>
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
          {itemRender && itemRender.sale.isSale ? (
            <div className={styles.price_box}>
              <span className={styles.normal_price}>
                <span className={styles.price}>
                  {convertPriceVnd(itemRender.sale.priceSale)} đ
                </span>
              </span>
              <span className={styles.old_price_box}>
                <span className={styles.sale_price}>
                  {convertPriceVnd(itemRender.price)} đ
                </span>
                <span className={styles.percent_sale}>
                  -
                  {(
                    ((itemRender.price - itemRender.sale.priceSale) /
                      itemRender.price) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </span>
            </div>
          ) : (
            <div className={styles.price_box}>
              <span className={styles.normal_price}>
                <span className={styles.price}>
                  {itemRender && convertPriceVnd(itemRender.price)} đ
                </span>
              </span>
            </div>
          )}
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
                onClick={() => verifyAddItem(currentItemChoose)}
              >
                Thêm vào giỏ hàng
              </button>
              <button className="btn btn-danger btn-lg" type="button">
                Mua ngay
              </button>
            </div>
          </div>
          <ul className={styles.product_feauture}>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/ghn.png"
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Giao hàng nhanh</strong>
                <p>Từ 2 - 5 ngày</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/free.png"
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Miễn phí vận chuyển</strong>
                <p>Đơn hàng từ 399K</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/order.png "
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Theo dõi đơn hàng một cách dễ dàng</strong>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/returns.png"
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Đổi trả linh hoạt</strong>
                <p>Với sản phẩm không tham gia chương trình khuyến mãi</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/pay.png"
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Thanh toán dễ dàng nhiều hình thức</strong>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <img
                  src="https://routine.vn/static/version1693379826/frontend/Magenest/routine/vi_VN/images/hotline.png"
                  alt=""
                />
              </div>

              <div className={styles.text}>
                <strong>Hotline hỗ trợ</strong>
                <h6>0967 334 520</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ServiceComponent />
      <ToastContainer />
    </div>
  );
}

import styles from "./cartpopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartPopup } from "../../redux/actions/DisplayCart.action";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartPopupComponent() {
  const cartIsShow = useSelector(
    (state: any) => state.displayCartReducer.isShow
  );
  const initItem = useSelector((state: any) => state.cartItemReduceer);
  const dispatch = useDispatch();
  const totalPrice = initItem.reduce((acc: any, item: any) => {
    return acc + item.price * item.qty;
  }, 0);
  const totalPriceVND = totalPrice.toLocaleString("it-IT", {
    style: "decimal",
  });
  return (
    <div>
      <Offcanvas
        placement="end"
        show={cartIsShow}
        onHide={() => dispatch(toggleCartPopup())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.listItems}>
            {initItem.map((item: any, index: any) => {
              const priceVN = item.price.toLocaleString("it-IT", {
                style: "decimal",
              });
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemPhoto}>
                      <div className={styles.itemPhotoWrapper}>
                        <Link to={`/product/${item.id}`}>
                          <img src={item.imageUrl} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className={styles.itemDetails}>
                      <h3 className={styles.item_name}>{item.product_name}</h3>
                      <div className={styles.item_options}>
                        <div className={styles.item_option}>
                          <span
                            className={styles.box_wrap}
                            style={{ backgroundColor: item.color }}
                          ></span>
                          <span>{item.color}</span>
                        </div>
                        <div className={styles.item_option}>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <div className={styles.item_bottom}>
                        <div className={styles.item_price}>
                          <span className={styles.price}>{priceVN}đ</span>
                        </div>
                        <div className={styles.item_qty}>
                          <button
                            className={`${styles.btn_qty} ${styles.qty_min}`}
                          >
                            -
                          </button>
                          <input
                            className={styles.input_qty}
                            value={item.qty}
                            readOnly={true}
                            disabled
                          />
                          <button
                            className={`${styles.btn_qty} ${styles.qty_max}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
          <div className={styles.sub_bottom}>
            <div className={styles.subtotal}>
              <span>Tổng tiền</span>
              <span>{totalPriceVND}đ</span>
            </div>

            <div className="d-grid">
              <Button variant="danger" size="lg">
                Thanh toán
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

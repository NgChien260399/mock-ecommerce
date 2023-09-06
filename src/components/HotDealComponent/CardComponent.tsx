import styles from "./Card.module.css"

const CardComponent = (props: any) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={props.url} alt="" />
      </div>
      <div className={styles.addToCart}>
        Thêm nhanh vào giỏ
      </div>
      <div className="cardInfo">
        <label htmlFor="">
          <input className={styles.input} type="radio" name="a" id="" />
          <input className={styles.input} type="radio" name="a" id="" />
          <input className={styles.input} type="radio" name="a" id="" />
          <input className={styles.input} type="radio" name="a" id="" />
        </label>
        <br />
        <span className={styles.contentCard}>{props.content}</span>
        <br />
        <span style={{fontWeight: "bolder"}}>{props.giaTien}</span>
        <br />
        <span className={styles.giaGoc}>{props.giaGoc}</span>
        {" "}
        <span className={styles.giamGia}>{props.giamGia}</span>
        <br />
        <div className={styles.onlineExclusive}>
          Độc quyền online
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
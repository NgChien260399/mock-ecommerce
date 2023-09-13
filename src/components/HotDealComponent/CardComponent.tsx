import { useState } from "react";
import styles from "./Card.module.css"
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';


const CardComponent = (props: any) => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={props.imageUrl} alt="" />
      </div>
      <div className={styles.addToCart} onClick={() => console.log(props.colors)}>
        Thêm nhanh vào giỏ
        <div style={{marginTop: "15px"}}>
          <button className={styles.sizesBtn} type="button" onClick={() => {}}>S</button>
          <button className={styles.sizesBtn} type="button" onClick={() => {}}>M</button>
          <button className={styles.sizesBtn} type="button" onClick={() => {}}>L</button>
          <button className={styles.sizesBtn} type="button" onClick={() => {}}>XL</button>
        </div>
      </div>
      
      <div className={styles.cardInfo}>
        <div className={styles.colorBtnWrapper}>
          <Radio
            {...controlProps('a')}
            sx={{
              color: `${props.colors[0]}`,
              outlineOffset: "5px",
              background: `${props.colors[0]}`,
              padding: "1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[0]}`,
                outline: `1px solid #333`,
              },
            }}
          />
          <Radio
            {...controlProps('b')}
            sx={{
              color: `${props.colors[1]}`,
              outlineOffset: "5px",
              background: `${props.colors[1]}`,
              padding: "1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[1]}`,
                outline: `1px solid #333`,
              },
            }}
          />
          <Radio
            {...controlProps('c')}
            sx={{
              color: `${props.colors[2]}`,
              outlineOffset: "5px",
              background: `${props.colors[2]}`,
              padding: "1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[2]}`,
                outline: `1px solid #333`,
              },
            }}
          />
          <Radio
            {...controlProps('d')}
            sx={{
              color: `${props.colors[3]}`,
              outlineOffset: "5px",
              background: `${props.colors[3]}`,
              padding: "1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[3]}`,
                outline: `1px solid #333`,
              },
            }}
          />
        </div>
        <br />
        <span className={styles.productName}>{props.productName}</span>
        <br />
        <span className={styles.salePrice}>{props.salePrice}</span>
        <br />
        <span className={styles.price}>{props.price}</span>
        {" "}
        <span className={styles.discount}>{props.percentDiscount}</span>
        <br />
        {/* <div className={styles.onlineExclusive}>
          Độc quyền online
        </div> */}
      </div>
    </div>
  );
};

export default CardComponent;
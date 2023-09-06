import { useState } from "react";
import CardComponent from "../../components/HotDealComponent/CardComponent";
import { productData } from "./ProductData";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./MenProduct.module.css"

const MenProductPage = () => {
  const [type, setType] = useState<string>("ao")

  return (
    <div className={styles.wrapper}>

      <div className={styles.sideBar}>
        <h6>Danh mục</h6>
        <ButtonGroup vertical={true}>
          <Button variant="info" onClick={() => setType("ao")}>Áo</Button>
          <Button variant="danger" onClick={() => setType("quan")}>Quần</Button>
          <Button onClick={() => setType("do mac ngoai")}>Đồ Mặc Ngoài</Button>
        </ButtonGroup>
      </div>

      <div className={styles.main}>
          {type === "ao" && (
            <div>
              <div className={styles.type}>
                <Type setType={setType} />
              </div>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent:"flex-start", gap: "20px" }}>
                <ProductsOnPage type={type}/>
              </div>
            </div>
            
          )}
          {type === "ao phong" && (
            <div>
            <div className={styles.type}>
              <Type setType={setType} />
            </div>
            <AoProductsOnPage type={type}/>
          </div>
          )}
          {type === "ao polo" && (
            <div>
            <div className={styles.type}>
              <Type setType={setType} />
            </div>
            <AoProductsOnPage type={type}/>
          </div>
          )}
          {type === "quan" && (
            <div>
              <ProductsOnPage type={type}/>
            </div>
          )}
          {type === "do mac ngoai" && (
            <div>
              <ProductsOnPage type={type}/>
            </div>
          )}
      </div>
    </div>
  )
}

export default MenProductPage;

const ProductsOnPage = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.type === props.type).map((item, i) => (
          <div key={i}>
            <CardComponent 
              url={item.url}
              content={item.content}
              giaTien={item.giaTien}
              giaGoc={item.giaGoc}
              giamGia={item.giamGia}
            />
          </div>
        ))}
    </>
  )
}

const AoProductsOnPage = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.typeShirt === props.type).map((item, i) => (
          <div key={i}>
            <CardComponent 
              url={item.url}
              content={item.content}
              giaTien={item.giaTien}
              giaGoc={item.giaGoc}
              giamGia={item.giamGia}
            />
          </div>
        ))}
    </>
  )
}

const Type = (props: any) => {
  return (
    <>
      <label htmlFor="" onClick={() => props.setType("ao phong")}>Áo phông</label>{" "}
      <label htmlFor="" onClick={() => props.setType("ao polo")}>Áo polo</label>
    </>
  )
}

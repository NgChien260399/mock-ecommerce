import { useState } from "react";
import CardComponent from "../../components/HotDealComponent/CardComponent";
import { productData } from "./ProductData";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import styles from "./MenProduct.module.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const MenProductPage = () => {
  const [type, setType] = useState<string>("ao")

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbExample}>
        <BreadcrumbExample />
      </div>
    <div className={styles.wrapper}>

      <div className={styles.sideBar}>
        <h6>Danh mục</h6>
        <ButtonGroup vertical={true}>
          <Button variant="info" onClick={() => setType("ao")}>Áo</Button>
          <Button variant="danger" onClick={() => setType("quan")}>Quần</Button>
          <Button onClick={() => setType("do mac ngoai")}>Đồ Mặc Ngoài</Button>
          <Button onClick={() => setType("do mac nha")}>Đồ Mặc Nhà</Button>
          <Button onClick={() => setType("do mac trong")}>Đồ Mặc Trong</Button>
          <Button onClick={() => setType("phu kien")}>Phụ Kiện</Button>
          <Button onClick={() => setType("hang moi")}>Hàng mới</Button>
          <Button onClick={() => setType("gia tot")}>Giá tốt</Button>
          <Button onClick={() => setType("Canifa Active")}>Canifa Active</Button>
        </ButtonGroup>
        <table>
          <tr><td><DropdownBtn type="Kích cỡ"/></td></tr>
          <tr><td><DropdownBtn type="Màu sắc"/></td></tr>
          <tr><td><DropdownBtn type="Khoảng giá"/></td></tr>
        </table>
      </div>

      <div className={styles.main}>
          {type === "ao" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType} type1="ao phong" type2="ao polo" type3="ao so mi" type4="ao ba lo"/>
              </div>
              <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "ao phong" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="ao phong" type2="ao polo" type3="ao so mi" type4="ao ba lo"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao polo" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="ao phong" type2="ao polo" type3="ao so mi" type4="ao ba lo"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao so mi" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="ao phong" type2="ao polo" type3="ao so mi" type4="ao ba lo"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao ba lo" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="ao phong" type2="ao polo" type3="ao so mi" type4="ao ba lo"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          
          {type === "quan" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType} type1="quan shorts" type2="quan jeans" type3="quan ni" type4="quan khaki"/>
              </div>
              <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "quan shorts" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan shorts" type2="quan jeans" type3="quan ni" type4="quan khaki"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan jeans" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan shorts" type2="quan jeans" type3="quan ni" type4="quan khaki"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan ni" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan shorts" type2="quan jeans" type3="quan ni" type4="quan khaki"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan khaki" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan shorts" type2="quan jeans" type3="quan ni" type4="quan khaki"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do mac ngoai" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType} type1="chong nang" type2="ao khoac ngan" type3="ao khoac gio" type4="ao khoac chan bong"/>
              </div>
              <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "chong nang" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="chong nang" type2="ao khoac ngan" type3="ao khoac gio" type4="ao khoac chan bong"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao khoac ngan" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="chong nang" type2="ao khoac ngan" type3="ao khoac gio" type4="ao khoac chan bong"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao khoac gio" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="chong nang" type2="ao khoac ngan" type3="ao khoac gio" type4="ao khoac chan bong"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao khoac chan bong" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="chong nang" type2="ao khoac ngan" type3="ao khoac gio" type4="ao khoac chan bong"/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do mac nha" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="bo mac nha" type2="quan mac nha" type3="ao mac nha" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "bo mac nha" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="bo mac nha" type2="quan mac nha" type3="ao mac nha" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan mac nha" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="bo mac nha" type2="quan mac nha" type3="ao mac nha" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao mac nha" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="bo mac nha" type2="quan mac nha" type3="ao mac nha" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do mac trong" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan lot nam" type2="ao mac trong" type3="giu nhiet" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan lot nam" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan lot nam" type2="ao mac trong" type3="giu nhiet" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao mac trong" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan lot nam" type2="ao mac trong" type3="giu nhiet" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "giu nhiet" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="quan lot nam" type2="ao mac trong" type3="giu nhiet" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "phu kien" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="phu kien" type2="do dung ca nhan" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "phu kien" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="phu kien" type2="do dung ca nhan" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "do dung ca nhan" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="phu kien" type2="do dung ca nhan" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "hang moi" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="mac tren" type2="mac duoi" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "mac tren" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="mac tren" type2="mac duoi" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "mac duoi" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="mac tren" type2="mac duoi" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "gia tot" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="gia tot" type2="dong gia tu 99k" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "gia tot" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="gia tot" type2="dong gia tu 99k" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "dong gia tu 99k" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="gia tot" type2="dong gia tu 99k" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "Canifa Active" && (
            <div>
            <div className={styles.type}>
              <Types setType={setType} type1="Canifa Active" type2="" type3="" type4=""/>
            </div>
            <div className={styles.productList}>
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          

      </div>
    </div>
    </div>
  )
}

export default MenProductPage;

const ProductsList = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.type === props.type).map((item, i) => (
          <div key={i}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.productName}
              salePrice={item.salePrice}
              price={item.price}
              percentDiscount={item.percentDiscount}
            />
          </div>
        ))}
    </>
  )
}

const TypeProductsList = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.typeOfType === props.type).map((item, i) => (
          <div key={i}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.productName}
              salePrice={item.salePrice}
              price={item.price}
              percentDiscount={item.percentDiscount}
            />
          </div>
        ))}
    </>
  )
}

// const ShirtType = (props: any) => {
//   return (
//     <>
//       <label htmlFor="" onClick={() => props.setType("ao phong")}>Áo phông</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("ao polo")}>Áo polo</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("ao so mi")}>Áo sơ mi</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("ao ba lo")}>Áo ba lỗ</label>{"  "}
//     </>
//   )
// }

// const TrousersType = (props: any) => {
//   return (
//     <>
//       <label htmlFor="" onClick={() => props.setType("quan shorts")}>Quần shorts</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("quan jeans")}>Quần jeans</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("quan ni")}>Quần nỉ</label>{"  "}
//       <label htmlFor="" onClick={() => props.setType("quan khaki")}>Quần khaki</label>{"  "}
//     </>
//   )
// }

const Types = (props: any) => {
  return (
    <>
      <label htmlFor="" onClick={() => props.setType(`${props.type1}`)}>{props.type1}</label>{"  "}
      <label htmlFor="" onClick={() => props.setType(`${props.type2}`)}>{props.type2}</label>{"  "}
      <label htmlFor="" onClick={() => props.setType(`${props.type3}`)}>{props.type3}</label>{"  "}
      <label htmlFor="" onClick={() => props.setType(`${props.type4}`)}>{props.type4}</label>{"  "}
    </>
  )
}

const DropdownBtn = (props: any) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{border: "2px solid #B45309", background: "white", color: "#000", width: "100px"}}>
        {props.type}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => {}}>All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  
}



const BreadcrumbExample = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="men">
        Nam
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

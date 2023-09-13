import { useState } from "react";
import CardComponent from "../../components/HotDealComponent/CardComponent";
import { productData } from "./ProductData";
import styles from "./MenProduct.module.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";

const BreadcrumbExample = () => {
  return (
  <div style={{marginBottom: "50px"}}>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="men">
        Nam
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
  );
}

const ProductsList = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.type === props.type).map((item, i) => (
          <div key={i} className={styles.productItem}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.productName}
              salePrice={item.salePrice}
              price={item.price}
              percentDiscount={item.percentDiscount}
              colors={item.colors}
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
              colors={item.colors}
            />
          </div>
        ))}
    </>
  )
}


const Types = (props: any) => {
  return (
    <>
      <NavLink to="" className={styles.categoryItem}
        onClick={() => {props.setType(`${props.type1}`)
        }}
      >{props.type5}</NavLink>
      <NavLink to="" className={styles.categoryItem}
        onClick={() => {props.setType(`${props.type2}`)
        }}
      >{props.type6}</NavLink>
      <NavLink to="" className={props.type7 ? `${styles.categoryItem}` : ""}
        onClick={() => {props.setType(`${props.type3}`)
        }}
      >{props.type7}</NavLink>
      <NavLink to="" className={props.type8 ? `${styles.categoryItem}` : ""}
        onClick={() => {props.setType(`${props.type4}`)
        }}
      >{props.type8}</NavLink>
    </>
  )
}



const MenProductPage = () => {
  const [type, setType] = useState<string>("ao")

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
  const listSizes = ["S", "M", "L", "XL", "XXL"];

  const [filterSearch, setFilterSearch] = useState<any>({
    category: "",
    size: [],
    color: [],
    priceMinFilter: 0,
    priceMaxFilter: 2000000,
  });

  const handleSliderChange = ({ min, max }: { min: number; max: number }) => {
    setFilterSearch((prevState: any) => ({
      ...prevState,
      priceMinFilter: min,
      priceMaxFilter: max,
    }));
  };

  
  return (
    <div className={styles.wrapper}>
      <BreadcrumbExample />
      
      <div className={styles.container}>

        <div className={styles.sideBar}>
          <h4 style={{marginBottom: "37px"}}>Danh mục</h4>
        
          <NavLink to="" className={styles.category} onClick={() => setType("ao")}>Áo</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("quan")}>Quần</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-ngoai")}>Đồ Mặc Ngoài</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-nha")}>Đồ Mặc Nhà</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-trong")}>Đồ Mặc Trong</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("phu-kien")}>Phụ Kiện</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("hang-moi")}>Hàng mới</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("gia-tot")}>Giá tốt</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("craceful-active")}>Craceful Active</NavLink>

          <div className={styles.label}>Màu sắc</div>
            <div className={styles.color_option}>
              {listColors.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.box_wrap} ${
                    filterSearch.color.includes(item) ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => {
                      if (
                        prevState.color.length > 0 &&
                        prevState.color.includes(item)
                      ) {
                        return {
                          ...prevState,
                          color: [
                            ...prevState.color
                              .map((value: any) => value)
                              .filter((value: any) => value !== item),
                          ],
                        };
                      } else
                        return {
                          ...prevState,
                          color: [...prevState.color, item],
                        };
                    })
                  }
                >
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
        <div className={styles.main}>
          {type === "ao" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
        
          {type === "ao-phong" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-polo" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "ao-so-mi" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "ao-ba-lo" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
            </div>
          )}
          
          {type === "quan" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "quan-shorts" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan-jeans" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan-ni" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan-khaki" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do-mac-ngoai" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "chong-nang" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-khoac-ngan" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-khoac-gio" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-khoac-chan-bong" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do-mac-nha" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="bo-mac-nha" type2="quan-mac-nha" type3="ao-mac-nha"
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "bo-mac-nha" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="bo-mac-nha" type2="quan-mac-nha" type3="ao-mac-nha" type4=""
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan-mac-nha" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="bo-mac-nha" type2="quan-mac-nha" type3="ao-mac-nha" type4=""
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-mac-nha" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="bo-mac-nha" type2="quan-mac-nha" type3="ao-mac-nha" type4=""
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "do-mac-trong" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-lot-nam" type2="ao-mac-trong" type3="giu-nhiet" type4=""
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "quan-lot-nam" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-lot-nam" type2="ao-mac-trong" type3="giu-nhiet" type4=""
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "ao-mac-trong" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-lot-nam" type2="ao-mac-trong" type3="giu-nhiet" type4=""
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "giu-nhiet" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-lot-nam" type2="ao-mac-trong" type3="giu-nhiet" type4=""
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "phu-kien" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="phu-kien" type2="do-dung-ca-nhan" type3="" type4=""
                  type5="Phụ kiện" type6="Đồ dùng cá nhân" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "phu-kien" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="phu-kien" type2="do-dung-ca-nhan" type3="" type4=""
                  type5="Phụ kiện" type6="Đồ dùng cá nhân" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "do-dung-ca-nhan" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="phu-kien" type2="do-dung-ca-nhan" type3="" type4=""
                  type5="Phụ kiện" type6="Đồ dùng cá nhân" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "hang-moi" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="mac-tren" type2="mac-duoi" type3="" type4=""
                  type5="Mặc trên" type6="Mặc dưới" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "mac-tren" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="mac-tren" type2="mac-duoi" type3="" type4=""
                  type5="Mặc trên" type6="Mặc dưới" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "mac-duoi" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="mac-tren" type2="mac-duoi" type3="" type4=""
                  type5="Mặc trên" type6="Mặc dưới" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "gia-tot" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="gia-tot" type2="dong-gia-tu-99k" type3="" type4=""
                  type5="Giá tốt" type6="Đồng giá từ 99k" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          {type === "gia-tot" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="gia-tot" type2="dong-gia-tu-99k" type3="" type4=""
                  type5="Giá tốt" type6="Đồng giá từ 99k" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "dong-gia-tu-99k" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="gia-tot" type2="dong-gia-tu-99k" type3="" type4=""
                  type5="Giá tốt" type6="Đồng giá từ 99k" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}

          {type === "craceful-active" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="craceful-active" type2="craceful-trendy" type3="" type4=""
                  type5="Craceful Active" type6="Craceful Trendy" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "craceful-active" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="craceful-active" type2="craceful-trendy" type3="" type4=""
                  type5="Craceful Active" type6="Craceful Trendy" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          {type === "craceful-trendy" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="craceful-active" type2="craceful-trendy" type3="" type4=""
                  type5="Craceful Active" type6="Craceful Trendy" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
          
        </div>
      </div>
    </div>
  )
}



export default MenProductPage;








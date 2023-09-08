// import { Box, Pagination, PaginationItem } from "@mui/material";
import { Box } from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styles from "./SuggestionForU.module.css"

import ReactPaginate from 'react-paginate';
import { useState } from "react";
import CardComponent from "../HotDealComponent/CardComponent";
import { productData } from "../../pages/MenProductPage/ProductData";

const SuggestionForU = () => {
  const [pageCount, setPageCount] = useState<number>(1)
  // const [totalCards, setTotalCards] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(2)

  const handlePageClick = (event: any) => {
    if(event.selected + 1 === 1) {
      setPageCount(1) 
    }
    if(event.selected + 1 === 2) {
      setPageCount(2)
    }
    
  }

  return (
    <div className={styles.wrapper}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2>Gợi ý cho bạn</h2>

        <Box sx={{ display: "flex", marginLeft: "auto", alignItems: "center", color: "#da291c" }}>
          <a href={"#"} style={{color: "#000", textDecoration: "none", fontSize: "16px"}}>Xem thêm</a>
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </Box>
      </Box>
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-between"
      }}
    >
      {pageCount === 1 && (
        <ProductsOnPage page={pageCount}/>
      )}
      {pageCount === 2 && (
        <ProductsOnPage page={pageCount}/>
      )}
    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<-"
        // renderOnZeroPageCount={null}
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default SuggestionForU ;

const ProductsOnPage = (props: any) => {
  return (
    <>
      {productData.filter((item1) => item1.hotDeals).filter((items) => items.page === props.page).map((item, i) => (
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


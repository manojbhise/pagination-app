import React from "react";
import "./ShowProducts.styles";
import { useStyles } from "./ShowProducts.styles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ProductsResponse } from "./ShowProducts-Interface";

const ShowProducts = () => {
  const productsPerPage = 9;
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState<ProductsResponse>();
  const pageLength = Math.ceil((data?.products?.length ?? 1) / productsPerPage);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=102");
    const response = await res.json();
    setData(response);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.showProductsContainer}>
      <h2 className={classes.productList}>Product List</h2>
      <div className={classes.productsContainer}>
        {data?.products
          ?.slice(
            (currentPage - 1) * productsPerPage,
            currentPage * productsPerPage
          )
          ?.map((el) => {
            return (
              <span key={el?.id} className={classes.products}>
                <img src={el?.thumbnail} alt={el?.title} />
                <span className={classes.productTitle}>{el?.title}</span>
              </span>
            );
          })}
      </div>
      {data?.products?.length && (
        <div className={classes.paginationContainer}>
          <ArrowLeftIcon
            style={{ display: currentPage > 1 ? "block" : "none" }}
            className={classes.icon}
            onClick={() => handlePagination(currentPage - 1)}
          />
          {[...Array(Math.ceil(data.products.length / productsPerPage))].map(
            (_, index) => {
              return (
                <button
                  key={index}
                  style={{
                    background: currentPage === index + 1 ? "blue" : "",
                  }}
                  className={classes.page}
                  onClick={() => handlePagination(index + 1)}
                >
                  {index + 1}
                </button>
              );
            }
          )}
          <ArrowRightIcon
            className={classes.icon}
            onClick={() => handlePagination(currentPage + 1)}
            style={{ display: currentPage === pageLength ? "none" : "block" }}
          />
        </div>
      )}
    </div>
  );
};

export default ShowProducts;

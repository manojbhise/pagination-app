import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { grey } from "@mui/material/colors";

export const useStyles = makeStyles()((theme: Theme) => ({
  showProductsContainer: {
    margin: "40px",
  },
  productList: {
    margin: "10px 0",
  },
  productsContainer: {
    gap: "30px",
    display: "grid",
    margin: "10px 0",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  products: {
    padding: "20px",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: grey[300],
    "& > img": {
      width: "100%",
      objectFit: "cover",
    },
  },
  productTitle: {
    fontSize: "18px",
    fontStyle: "bold",
  },
  paginationContainer: {
    gap: "5px",
    display: "flex",
    margin: "30px 0",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    width: "40px",
    color: "white",
    border: "none",
    height: "35px",
    cursor: "pointer",
    backgroundColor: "black",
  },
  icon: {
    padding: 0,
    width: "40px",
    height: "35px",
    color: "white",
    cursor: "pointer",
    backgroundColor: "black",
  },
}));

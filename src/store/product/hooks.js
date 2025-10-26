import { useSelector } from "react-redux";
import { getProductDetail, getProducts } from "./selectors";

export const useProducts = () => {
    const products = useSelector(getProducts);

    return products;
};

export const useProductsDetail = () => {
    const products = useSelector(getProductDetail);

    return products;
};

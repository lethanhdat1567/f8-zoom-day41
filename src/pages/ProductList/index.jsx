import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import { useEffect } from "react";
import productActions from "@/store/product/actions";
import { useProducts } from "@/store/product/hooks";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function ProductList() {
    const dispatch = useDispatch();
    const products = useProducts();

    useEffect(() => {
        (async () => {
            dispatch(productActions.getList());
        })();
    }, [dispatch]);

    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Danh sách sản phẩm</h1>
            <div className={cx("product-grid")}>
                {products.map((product) => (
                    <div key={product.id} className={cx("product-card")}>
                        <Link to={`/products/${product.slug}`}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className={cx("product-image")}
                            />
                        </Link>
                        <div className={cx("product-content")}>
                            <div className={cx("product-content-info")}>
                                <Link to={`/products/${product.slug}`}>
                                    <h2 className={cx("product-name")}>
                                        {product.title}
                                    </h2>
                                </Link>
                                <p className={cx("product-description")}>
                                    {product.description}
                                </p>
                            </div>
                            <Link to={`/products/${product.slug}`}>
                                <button className={cx("product-button")}>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

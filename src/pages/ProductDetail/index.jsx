import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import productActions from "@/store/product/actions";
import { useProductsDetail } from "@/store/product/hooks";

const cx = classNames.bind(styles);

function ProductDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const product = useProductsDetail();

    useEffect(() => {
        if (!slug) return;
        (async () => {
            dispatch(productActions.getDetail(slug));
        })();
    }, [dispatch, slug]);

    if (!product) return;

    return (
        <div className={cx("product-detail")}>
            <div className={cx("container")}>
                <div className={cx("product-content")}>
                    <Link to="/products" className={cx("back-link")}>
                        {`< `}Quay lại danh sách sản phẩm
                    </Link>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className={cx("product-image")}
                    />
                    <div className={cx("product-info")}>
                        <h1 className={cx("product-name")}>{product.title}</h1>
                        <p className={cx("product-price")}>${product.price}</p>
                        <p className={cx("product-description")}>
                            {product.description}
                        </p>
                        <button className={cx("add-to-cart")}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("home")}>
            <section className={cx("banner")}>
                <div className={cx("banner-content")}>
                    <h1 className={cx("banner-title")}>
                        Chào mừng đến với MyStore
                    </h1>
                    <p className={cx("banner-subtitle")}>
                        Khám phá các sản phẩm chất lượng cao với thiết kế hiện
                        đại và giá cả hợp lý.
                    </p>
                    <Link to="/products" className={cx("banner-cta")}>
                        Xem sản phẩm ngay
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;

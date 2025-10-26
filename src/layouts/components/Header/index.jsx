import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <Link to={"/"}>
                    <h1 className={cx("logo")}>MyStore</h1>
                </Link>
                <nav className={cx("nav")}>
                    <ul className={cx("nav-list")}>
                        <li>
                            <Link to={"/"} className={cx("nav-link")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"} className={cx("nav-link")}>
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("footer")}>
            <div className={cx("container")}>
                <p className={cx("copyright")}>
                    © 2025 MyStore. All rights reserved.
                </p>
                <div className={cx("social-links")}>
                    <a href="#" className={cx("social-link")}>
                        Facebook
                    </a>
                    <a href="#" className={cx("social-link")}>
                        Instagram
                    </a>
                    <a href="#" className={cx("social-link")}>
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

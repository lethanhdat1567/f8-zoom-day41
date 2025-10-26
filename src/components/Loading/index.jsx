import classNames from "classnames/bind";
import styles from "./Loading.module.scss";
import { useLoading } from "@/store/ui/hooks";

const cx = classNames.bind(styles);

function Loading() {
    const loading = useLoading();

    if (!loading) return;

    return <div className={cx("wrap")} />;
}

export default Loading;

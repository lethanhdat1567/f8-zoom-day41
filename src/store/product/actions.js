import http from "@/utils/htpp";
import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";
import { hideLoading, showLoading } from "../ui/actions";

export const getList = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_LIST,
        });
        dispatch(showLoading());

        try {
            const res = await http.get("/products");
            dispatch(setList(res.data.items));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }
    };
};

export const getDetail = (slug) => {
    return async (dispatch) => {
        dispatch({
            type: GET_DETAIL,
        });
        dispatch(showLoading());
        try {
            const res = await http.get(`/products/${slug}`);
            dispatch(setDetail(res.data));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }
    };
};

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload,
    };
};

export const setDetail = (payload) => {
    return {
        type: SET_DETAIL,
        payload,
    };
};

const productActions = { setList, setDetail, getList, getDetail };

export default productActions;

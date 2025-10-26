import axios from "axios";

export const httpInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

const _send = async (method, path, data, config) => {
    const response = await httpInstance.request({
        ...config,
        method,
        url: path,
        data,
    });

    return response;
};

httpInstance.interceptors.response.use(
    (response) => {
        if (
            response.data &&
            typeof response.data === "object" &&
            "data" in response.data
        ) {
            return response.data;
        }
        return response;
    },
    (error) => {
        console.error("HTTP Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

const get = async (path, config) => {
    return await _send("get", path, null, config);
};

const post = async (path, data, config) => {
    return await _send("post", path, data, config);
};
const put = async (path, data, config) => {
    return await _send("put", path, data, config);
};
const patch = async (path, data, config) => {
    return await _send("patch", path, data, config);
};

const del = async (path, config) => {
    return await _send("delete", path, null, config);
};

const http = { get, post, put, patch, del };

export default http;

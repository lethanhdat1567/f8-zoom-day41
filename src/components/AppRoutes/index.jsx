import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "../Loading";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import DefaultLayout from "@/layouts";
import Home from "@/pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Loading />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

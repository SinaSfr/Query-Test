import { useRoutes } from "react-router-dom";
import Product from "./src/Components/Products/Product";
import ProductDetails from "./src/Components/productDetails/ProductDetails";

import React from 'react'

const AppRoutes = () => {
    const router = [
        {path: '/', element: <div>home</div>},
        {path: '/products', element: <Product/>},
        {path: '/products/:id', element: <ProductDetails/>},
        {path: '/about-us', element: <div>about</div>}
    ]

    return useRoutes(router);
}




export default AppRoutes
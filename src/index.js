import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {Clothes} from "./pages/Clothes";
import {ClothesDetail} from "./pages/ClothesDetail";
import {Home} from "./components/Home";
import {MyCart} from "./components/MyCart";
import {NewClothes} from "./components/NewClothes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/clothes', element: <Clothes/>},
            {path: '/clothes/new', element: <NewClothes/>},
            {path: '/clothes/:id', element:<ClothesDetail/>},
            {path: '/carts', element:<MyCart/>}
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



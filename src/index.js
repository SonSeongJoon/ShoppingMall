import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { AllProducts } from './pages/AllProducts';
import { ProductsDetail } from './pages/ProductsDetail';
import { Home } from './components/Home';
import { MyCart } from './components/MyCart';
import { NewClothes } from './pages/NewClothes';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
         { index: true, element: <Home /> },
         { path: '/allproducts', element: <AllProducts /> },
         {
            path: '/products/new',
            element: (
               <ProtectedRoute requireAdmin={true}>
                  <NewClothes />
               </ProtectedRoute>
            ),
         },
         { path: '/products/:id', element: <ProductsDetail /> },
         {
            path: '/carts',
            element: (
               <ProtectedRoute>
                  <MyCart />
               </ProtectedRoute>
            ),
         },
      ],
   },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);

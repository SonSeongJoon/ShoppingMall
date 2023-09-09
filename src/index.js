import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Clothes } from './pages/Clothes';
import { ClothesDetail } from './pages/ClothesDetail';
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
         { path: '/clothes', element: <Clothes /> },
         {
            path: '/clothes/new',
            element: (
               <ProtectedRoute requireAdmin={true}>
                  <NewClothes />
               </ProtectedRoute>
            ),
         },
         { path: '/clothes/:id', element: <ClothesDetail /> },
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

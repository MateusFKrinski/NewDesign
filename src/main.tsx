import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import {LoginPage} from "./pages/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: 'Home Route',
        // errorElement: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,

    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

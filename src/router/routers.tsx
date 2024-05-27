import { createBrowserRouter } from 'react-router-dom'

// Layouts

import DefaultLayout from '../layouts/DefaultLayout'

// Pages

import Home from '../pages/home/Home'
import Users from '../pages/users/Users'
import Products from '../pages/products/Products'
import Login from '../pages/login/Login'

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
])
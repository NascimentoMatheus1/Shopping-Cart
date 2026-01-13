import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import ShopPage from './components/ShopPage/ShopPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: 'shop', element: <ShopPage /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'about', element: <AboutPage /> },
        ],
    },
];

export default routes;

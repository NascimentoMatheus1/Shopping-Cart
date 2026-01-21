import { Outlet } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import shoppingCartSrc from './assets/shopping_bag.svg';
import useFakeStoreApi from './useFakeStoreApi';

function App() {
    const {
        data,
        loading,
        error,
        cart,
        setCart,
        getProductByCategory,
        addItemToCart,
        removeItemFromCart,
    } = useFakeStoreApi();

    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">Zenith</Link>
                </div>
                {/* <NavBar /> */}
                <div className="cart">
                    <Link to="cart">
                        <img src={shoppingCartSrc} alt="shopping bag icon" />
                        <span>{cart.length}</span>
                    </Link>
                </div>
            </header>
            <main>
                <Outlet
                    context={{
                        data,
                        loading,
                        error,
                        cart,
                        setCart,
                        getProductByCategory,
                        addItemToCart,
                        removeItemFromCart,
                    }}
                />
            </main>
        </>
    );
}

export default App;

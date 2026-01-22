import { Outlet } from 'react-router';
import { Link } from 'react-router';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
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
                <HamburgerMenu />
                <div className="logo">
                    <Link to="/">Zenith</Link>
                </div>
                <NavBar />
                <div className="cart">
                    <Link to="cart">
                        <div className="cart-icon-container">
                            <img
                                src={shoppingCartSrc}
                                alt="shopping bag icon"
                            />
                            <span className="items-on-cart">{cart.length}</span>
                        </div>
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

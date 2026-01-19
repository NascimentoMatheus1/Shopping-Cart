import { Outlet } from 'react-router';
import { Link } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import shoppingCartSrc from './assets/shopping_bag.svg';
import useFakeStoreApi from './useFakeStoreApi';

function App() {
    const props = useFakeStoreApi();

    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">Zenith</Link>
                </div>
                <NavBar />
                <div className="cart">
                    <Link to="cart">
                        <img src={shoppingCartSrc} alt="shopping bag icon" />
                    </Link>
                </div>
            </header>
            <nav className={'categorieNav'}>
                <ul className={'categorieList'}>
                    <li>
                        <Link to="/shop/men's clothing">men's clothing</Link>
                    </li>
                    <li>
                        <Link to="/shop/women's clothing">
                            women's clothing
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link to="/shop/jewelery">jewelery</Link>
                    </li>
                    <li>
                        <Link to="/shop/electronics">electronics</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet context={{ ...props }} />
            </main>
        </>
    );
}

export default App;

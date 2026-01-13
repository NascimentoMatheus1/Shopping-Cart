import { Outlet } from 'react-router';
import { Link } from 'react-router';
import shoppingCartSrc from './assets/shopping_bag.svg';

function App() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">Zenith</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="cart">
                    <Link to="cart">
                        <img src={shoppingCartSrc} alt="shopping bag icon" />
                    </Link>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;

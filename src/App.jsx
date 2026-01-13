import { Outlet } from 'react-router';
import { Link } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import shoppingCartSrc from './assets/shopping_bag.svg';

function App() {
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
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;

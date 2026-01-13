import shoppingCartSrc from './assets/shopping_bag.svg';

function App() {
    return (
        <>
            <header>
                <div className="logo">Zenith</div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                    </ul>
                </nav>
                <div className="cart">
                    <img src={shoppingCartSrc} alt="shopping bag icon" />
                </div>
            </header>
        </>
    );
}

export default App;

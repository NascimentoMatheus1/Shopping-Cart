import { useState } from 'react';
import { Link } from 'react-router';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    function closeScreenMenu() {
        setIsActive(false);
    }

    return (
        <div className={styles.componentContainer}>
            <div
                className={`${styles.offScreenMenu} ${isActive && styles.active}`}
            >
                <button className={styles.closeBtn} onClick={closeScreenMenu}>
                    Close
                </button>
                <ul>
                    <li>
                        <Link to="/" onClick={closeScreenMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="shop" onClick={closeScreenMenu}>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="about" onClick={closeScreenMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="cart" onClick={closeScreenMenu}>
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop/men's clothing"
                            onClick={closeScreenMenu}
                        >
                            men's clothing
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop/women's clothing"
                            onClick={closeScreenMenu}
                        >
                            women's clothing
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop/jewelery" onClick={closeScreenMenu}>
                            jewelery
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop/electronics" onClick={closeScreenMenu}>
                            electronics
                        </Link>
                    </li>
                </ul>
            </div>
            <nav>
                <div
                    className={`${styles.hamMenu} ${isActive && styles.active}`}
                    onClick={handleClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    );
}

export default HamburgerMenu;

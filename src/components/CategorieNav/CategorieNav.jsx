import styles from './CategorieNav.module.css';
import { Link } from 'react-router';

function CategorieNav() {
    return (
        <nav className={styles.categorieNav}>
            <ul className={styles.categorieList}>
                <li>
                    <Link to="/shop/men's clothing">men's clothing</Link>
                </li>
                <li>
                    <Link to="/shop/women's clothing">women's clothing</Link>
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
    );
}

export default CategorieNav;

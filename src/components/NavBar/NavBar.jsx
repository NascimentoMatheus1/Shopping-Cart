import styles from './NavBar.module.css';
import { Link } from 'react-router';

function NavBar() {
    return (
        <nav className={styles.componentContainer}>
            <ul className={styles.list}>
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
    );
}

export default NavBar;

import Product from '../Product/Product';
import { ClipLoader } from 'react-spinners';
import { useOutletContext } from 'react-router';
import styles from './ShopPage.module.css';

function ShopPage() {
    const { data, loading, error } = useOutletContext();

    if (loading)
        return (
            <div>
                <ClipLoader className={styles.loadingIcon} />
            </div>
        );

    if (error) return <div>{error}</div>;

    return (
        <main>
            <div className={styles.productsContainer}>
                {data.map((item) => (
                    <Product {...item} />
                ))}
            </div>
        </main>
    );
}

export default ShopPage;

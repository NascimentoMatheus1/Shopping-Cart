import Product from '../Product/Product';
import { ClipLoader } from 'react-spinners';
import { useOutletContext } from 'react-router';
import styles from './ShopPage.module.css';

function ShopPage() {
    const { data, loading, error, addItemToCart, removeItemFromCart } =
        useOutletContext();

    if (loading)
        return (
            <div className={styles.shopPage}>
                <ClipLoader className={styles.loadingIcon} />
            </div>
        );

    if (error) return <div className={styles.shopPage}> {error}</div>;
    return (
        <div className={styles.shopPage}>
            <div className={styles.productsContainer}>
                {data.map((item) => (
                    <Product
                        {...item}
                        key={item.id}
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopPage;

import Product from '../Product/Product';
import { ClipLoader } from 'react-spinners';
import { useOutletContext, useParams } from 'react-router';
import styles from './ShopPageDetails.module.css';

function ShopPageDetails() {
    const {
        loading,
        error,
        getProductByCategory,
        addItemToCart,
        removeItemFromCart,
    } = useOutletContext();
    let { category } = useParams();
    const productByCategory = getProductByCategory(category);

    if (loading)
        return (
            <div className={styles.shopPage}>
                <ClipLoader className={styles.loadingIcon} />
            </div>
        );

    if (error) return <div className={styles.shopPage}>{error}</div>;

    return (
        <div className={styles.shopPage}>
            <div className={styles.categoryTitle}>
                <h1>{category}</h1>
            </div>

            <div className={styles.productsContainer}>
                {productByCategory.map((item) => (
                    <Product
                        {...item}
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopPageDetails;

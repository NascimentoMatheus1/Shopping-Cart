import styles from './product.module.css';

function Product({ image, price, title }) {
    return (
        <div className={styles.product}>
            <div className={styles.productImageContainer}>
                <img src={image} />
            </div>
            <div className={styles.productInfo}>
                <p>{title}</p>
                <p className={styles.itemPrice}>${price.toFixed(2)}</p>
                <button className={styles.addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;

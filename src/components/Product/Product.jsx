import styles from './product.module.css';

function Product({
    id,
    image,
    price,
    title,
    isOnCart,
    addItemToCart,
    removeItemFromCart,
}) {
    return (
        <div className={styles.product}>
            <div className={styles.productImageContainer}>
                <img src={image} />
            </div>
            <div className={styles.productInfo}>
                <p>{title}</p>
                <p className={styles.itemPrice}>${price.toFixed(2)}</p>
                {isOnCart ? (
                    <button
                        className={styles.removeFromCart}
                        onClick={() => {
                            removeItemFromCart(id);
                        }}
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button
                        className={styles.addToCart}
                        onClick={() => {
                            addItemToCart(id);
                        }}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default Product;

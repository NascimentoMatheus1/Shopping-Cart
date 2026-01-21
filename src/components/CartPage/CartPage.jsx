import { Link } from 'react-router';
import { useOutletContext } from 'react-router';

import styles from './CartPage.module.css';

import IncrementInput from '../IncrementInput/IncrementInput.jsx';
import deleteIcon from '../../assets/delete.svg';
import { useState } from 'react';

function CartItem({
    id,
    image,
    price,
    title,
    isSelect,
    quantity,
    removeItemFromCart,
    manageSelectStateChange,
    manageIncrementChange,
}) {
    function handleCheckboxChange() {
        manageSelectStateChange(id);
    }

    return (
        <div className={styles.cartItem}>
            <input
                type="checkbox"
                className={styles.checkBtn}
                checked={isSelect}
                onChange={handleCheckboxChange}
            ></input>
            <img src={image} className={styles.itemImage} />
            <div style={{ flexGrow: '1' }}>
                <div className={styles.itemInfoContainer}>
                    <p className={styles.itemTitle}>{title}</p>
                    <p>{`$${price.toFixed(2)}`}</p>
                    <div
                        className={styles.deleteBtn}
                        onClick={() => {
                            removeItemFromCart(id);
                        }}
                    >
                        <img src={deleteIcon} alt="delete icon" />
                    </div>
                </div>
                <IncrementInput
                    id={id}
                    value={quantity}
                    onChange={manageIncrementChange}
                ></IncrementInput>
            </div>
        </div>
    );
}

function CartPage() {
    const { cart, setCart, removeItemFromCart } = useOutletContext();
    const [isAllSelect, setAllIsSelect] = useState(false);

    const selectedItems = cart.filter((item) => item.isSelect);

    const cartTotal = selectedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    const totalQuantity = selectedItems.reduce(
        (acc, item) => acc + item.quantity,
        0,
    );

    function manageIncrementChange(id, value) {
        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: value };
                } else {
                    return item;
                }
            }),
        );
    }

    function manageSelectStateChange(id) {
        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    return { ...item, isSelect: !item.isSelect };
                } else {
                    return item;
                }
            }),
        );
    }

    function handleCheckboxChange() {
        setAllIsSelect(!isAllSelect);
        setCart(
            cart.map((item) => {
                return { ...item, isSelect: !isAllSelect };
            }),
        );
    }

    function checkout() {
        cartTotal === 0
            ? alert('Item selection is empty!')
            : alert('Checkout successful!');
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.productsSection}>
                <div className={styles.allProductsContainer}>
                    <input
                        type="checkbox"
                        className={styles.checkBtn}
                        checked={isAllSelect}
                        onChange={handleCheckboxChange}
                    ></input>
                    <span style={{ marginLeft: '1rem' }}>All products</span>
                </div>
                <div className={styles.itemsContainer}>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            {...item}
                            removeItemFromCart={removeItemFromCart}
                            manageSelectStateChange={manageSelectStateChange}
                            manageIncrementChange={manageIncrementChange}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.checkoutDiv}>
                <div className={styles.checkoutSumaryTitle}>
                    <p>Summary</p>
                </div>
                <div className={styles.checkoutInfoContainer}>
                    <div className={styles.checkoutInfo}>
                        <p>items:</p>
                        <p>{totalQuantity}</p>
                    </div>
                    <div className={styles.checkoutInfo}>
                        <p>Total:</p>
                        <p>{`$ ${cartTotal.toFixed(2)}`}</p>
                    </div>
                    <button className={styles.checkoutBtn} onClick={checkout}>
                        Checkout
                    </button>
                    <p>
                        <Link to="/shop">Keep Shopping</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartPage;

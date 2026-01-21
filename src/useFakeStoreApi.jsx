import { useState, useEffect } from 'react';

function useFakeStoreApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    function getProductByCategory(category) {
        return data.filter((item) => item.category === category);
    }

    function addItemToCart(id) {
        setData(
            data.map((item) => {
                if (item.id === id) {
                    const cartNewItem = {
                        ...item,
                        isSelect: false,
                        quantity: 1,
                    };
                    setCart((c) => [...c, cartNewItem]);
                    return { ...item, isOnCart: true };
                } else {
                    return item;
                }
            }),
        );
    }

    function removeItemFromCart(id) {
        setData(
            data.map((item) => {
                if (item.id === id) {
                    return { ...item, isOnCart: false };
                } else {
                    return item;
                }
            }),
        );
        setCart(cart.filter((item) => item.id !== id));
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setData(
                    data.map((item) => {
                        return { ...item, isOnCart: false };
                    }),
                );
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        cart,
        setCart,
        getProductByCategory,
        addItemToCart,
        removeItemFromCart,
    };
}

export default useFakeStoreApi;

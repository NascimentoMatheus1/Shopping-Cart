import { useState, useEffect } from 'react';

function useFakeStoreApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function getProductByCategory(category) {
        return data.filter((item) => item.category === category);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setData(data);
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
        getProductByCategory,
    };
}

export default useFakeStoreApi;

import useFakeStoreApi from '../../useFakeStoreApi';
import Product from '../Product/Product';
import { ClipLoader } from 'react-spinners';

function ShopPage() {
    const { data, loading, error } = useFakeStoreApi();

    if (loading)
        return (
            <div>
                <ClipLoader className="loading-icon" />
            </div>
        );

    if (error) return <div>{error}</div>;

    return (
        <main>
            <div className="products-container">
                {data.map((item) => (
                    <Product {...item} />
                ))}
            </div>
        </main>
    );
}

export default ShopPage;

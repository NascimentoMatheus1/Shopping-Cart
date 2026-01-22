import { useOutletContext } from 'react-router';
import { ClipLoader } from 'react-spinners';

import CategorieNav from '../CategorieNav/CategorieNav';
import Slider from '../Slider/Slidex';
import Carousel from '../Carousel/Carousel';
import Product from '../Product/Product';

import banner1 from '../../assets/mega-sale-banner1.png';
import banner2 from '../../assets/mega-sale-banner2.png';
import banner3 from '../../assets/mega-sale-banner3.png';
import banner4 from '../../assets/mega-sale-banner4.png';
import addImage1 from '../../assets/sale-ad-image1.jpg';
import addImage2 from '../../assets/sale-ad-image2.jpg';

import styles from './HomePage.module.css';

function HomePage() {
    const { data, loading, error, addItemToCart, removeItemFromCart } =
        useOutletContext();

    const bannerImages = [banner1, banner2, banner3, banner4];

    const trendingProducts = data
        .slice(0, 10)
        .map((item) => (
            <Product
                {...item}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
            />
        ));

    const bestDeals = data.slice(10).map((item) => <Product {...item} />);

    if (loading)
        return (
            <div className={styles.homePage}>
                <ClipLoader className={styles.loadingIcon} />
            </div>
        );

    if (error) return <div>{error}</div>;

    return (
        <div className={styles.homePage}>
            <CategorieNav />
            <div
                style={{
                    width: '100%',
                }}
            >
                <Carousel imagesUrl={bannerImages}></Carousel>
            </div>

            <div className={styles.sliderContainer}>
                <h1 className={`${styles.trendingTitle} ${styles.dealTitle}`}>
                    Trending deals
                </h1>
                <Slider slides={trendingProducts} />
            </div>

            <div className={styles.addContainer}>
                <img src={addImage1} alt="" className={styles.addImage} />
                <img src={addImage2} alt="" />
            </div>

            <div className={styles.sliderContainer}>
                <h1 className={styles.dealTitle}>Best Deals</h1>
                <Slider slides={bestDeals} />
            </div>
        </div>
    );
}

export default HomePage;

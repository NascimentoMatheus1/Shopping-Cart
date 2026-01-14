import styles from './Carousel.module.css';
import { useState, useEffect } from 'react';
import { CircleDot, Circle } from 'lucide-react';

function Carousel({ imagesUrl }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) =>
            index === imagesUrl.length - 1 ? 0 : index + 1
        );
    }

    function showPrevImage() {
        setImageIndex((index) =>
            index === 0 ? imagesUrl.length - 1 : index - 1
        );
    }

    useEffect(() => {
        const timer = setInterval(() => {
            showNextImage();
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    overflow: 'hidden',
                }}
            >
                {imagesUrl.map((url) => (
                    <img
                        key={url}
                        src={url}
                        className={styles.imgSliderImg}
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button
                className={styles.imgSliderButton}
                style={{ left: '0' }}
                onClick={showPrevImage}
            >
                {' '}
                &#8656;
            </button>
            <button
                className={styles.imgSliderButton}
                style={{ right: '0' }}
                onClick={showNextImage}
            >
                {' '}
                &#8658;{' '}
            </button>
            <div
                style={{
                    position: 'absolute',
                    bottom: '.5rem',
                    left: '50%',
                    translate: '-50%',
                    display: 'flex',
                    gap: '.25rem',
                }}
            >
                {imagesUrl.map((_, index) => (
                    <button
                        onClick={() => {
                            setImageIndex(index);
                        }}
                        className={styles.imgSliderDotBtn}
                    >
                        {index === imageIndex ? <CircleDot /> : <Circle />}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;

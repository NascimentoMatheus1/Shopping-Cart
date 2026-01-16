import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider({ slides }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                // when window width is >= 640px
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1050: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 70,
                },
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide>{slide}</SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;

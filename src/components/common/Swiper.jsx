import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/navigation'; // 네비게이션 기능 추가
import 'swiper/css/pagination'; // 페이지네이션 기능 추가
import styles from '../../styles/common/SwiperMain.module.css';

const SwiperMain = () => {
    const stationeryData = [
        {
            title: "노트",
            details: [
                { dt: "사이즈", dd: "A5", unit: "", trend: null },
                { dt: "페이지 수", dd: "100", unit: "장", trend: null },
            ],
        },
        {
            title: "펜",
            details: [
                { dt: "색상", dd: "블루", unit: "", trend: null },
                { dt: "잉크 종류", dd: "젤", unit: "", trend: null },
            ],
        },
        {
            title: "지우개",
            details: [
                { dt: "재질", dd: "고무", unit: "", trend: null },
                { dt: "사이즈", dd: "3x5 cm", unit: "", trend: null },
            ],
        },
        {
            title: "파일폴더",
            details: [
                { dt: "용량", dd: "A4", unit: "", trend: null },
                { dt: "재질", dd: "플라스틱", unit: "", trend: null },
            ],
        },
    ];

    return (
        <div className={`row row-1 ${styles.cardWrap}`}>
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {stationeryData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <section className={styles.stationeryCard}>
                            <h3>{item.title}</h3>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperMain;
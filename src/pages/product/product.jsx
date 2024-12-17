import React from 'react';
import Link from 'next/link';
import styles from '../../styles/product/BannerList.module.css';

const BannerList = () => {
    const banners = [
        { id: 1, imgSrc: "/images/Product/노랑색다이어리.png", title: "제브라 마일드라이너", description: "은은한 색상이 특징인 형광펜" },
        { id: 2, imgSrc: "/images/Product/노랑색다이어리.png", title: "파이롯트 쥬스업", description: "부드러운 필기감" },
        { id: 3, imgSrc: "/images/Product/노랑색다이어리.png", title: "유니 제트스트림", description: "다시 찾게되는 스테디셀러" },
        { id: 4, imgSrc: "/images/Product/노랑색다이어리.png", title: "유니 시그노", description: "기본이 되는 펜 .28/.38/.5" },
    ];

    return (
        <div className={styles.SD_spBnr_10_frame}>
            <ul className={styles.list}>
                {banners.map((banner) => (
                    <li key={banner.id} className={styles.listItem}>
                        <Link href={`/product/${banner.id}`}>
                        <div className={styles.card}>
                            <img src={banner.imgSrc} alt={banner.title} className={styles.image} />
                            <h4 className={styles.title}>{banner.title}</h4>
                            <p className={styles.description}>{banner.description}</p>
                        </div>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BannerList;

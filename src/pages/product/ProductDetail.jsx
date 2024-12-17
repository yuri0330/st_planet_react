// pages/product/[id].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/product/ProductDetail.module.css';

// 예제 데이터
const productData = {
    1: {
        id: 1,
        name: "제브라 마일드라이너",
        image: "/images/Product/노랑색다이어리.png",
        originalPrice: 10000,
        discountPrice: 8000,
        discountRate: 20,
        options: ["노랑", "초록", "파랑"],
        description: "은은한 색상이 특징인 형광펜으로 눈이 편안하며 노트 필기나 다이어리 꾸미기에 적합합니다.",
        specs: {
            material: "플라스틱",
            size: "14cm",
            colors: ["노랑", "초록", "파랑"],
        },
    },
    2: {
        id: 2,
        name: "파이롯트 쥬스업",
        image: "/images/Product/노랑색다이어리.png",
        originalPrice: 12000,
        discountPrice: 10000,
        discountRate: 16,
        options: ["검정", "빨강", "파랑"],
        description: "부드러운 필기감이 특징인 펜.",
        specs: {
            material: "메탈",
            size: "14.5cm",
            colors: ["검정", "빨강", "파랑"],
        },
    },
    3: {
        id: 3,
        name: "파이롯트 쥬스업",
        image: "/images/Product/노랑색다이어리.png",
        originalPrice: 12000,
        discountPrice: 10000,
        discountRate: 16,
        options: ["검정", "빨강", "파랑"],
        description: "부드러운 필기감이 특징인 펜.",
        specs: {
            material: "메탈",
            size: "14.5cm",
            colors: ["검정", "빨강", "파랑"],
        },
    },
};

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // URL의 id에 해당하는 상품 데이터 가져오기
    const product = productData[id];

    if (!product) {
        return <div>상품 정보를 찾을 수 없습니다.</div>;
    }

    const [selectedOption, setSelectedOption] = useState(product.options[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        alert(`장바구니에 "${product.name}"를 ${quantity}개 담았습니다.`);
    };

    const handleBuyNow = () => {
        alert(`"${product.name}"를 ${quantity}개 바로 구매합니다.`);
    };

    return (
        <div className={styles.productDetailPage}>
    {/* 1. 상품 기본 정보 */}
    <div className={styles.productHeader}>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
    </div>

    {/* 2. 가격 정보 */}
    <div className={styles.priceSection}>
        <p className={styles.originalPrice}>정가: {product.originalPrice.toLocaleString()}원</p>
        <p className={styles.discountPrice}>
            할인가: {product.discountPrice.toLocaleString()}원 ({product.discountRate}% 할인)
        </p>
    </div>

    {/* 3. 구매 옵션 */}
    <div className={styles.optionsSection}>
        <label htmlFor="color">색상 선택:</label>
        <select
            id="color"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
        >
            {product.options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>

        <label htmlFor="quantity">수량:</label>
        <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
        />
    </div>

    {/* 4. 사용자 행동 버튼 */}
    <div className={styles.actionButtons}>
        <button className={styles.addToCart} onClick={handleAddToCart}>
            장바구니에 추가
        </button>
        <button className={styles.buyNow} onClick={handleBuyNow}>
            즉시 구매
        </button>
    </div>

    {/* 5. 상품 상세 설명 */}
    <div className={styles.productDetails}>
        <h2>상품 상세 정보</h2>
        <p>{product.description}</p>
        <ul>
            <li>재질: {product.specs.material}</li>
            <li>크기: {product.specs.size}</li>
            <li>색상: {product.specs.colors.join(", ")}</li>
        </ul>
    </div>
</div>

    );
};

export default ProductDetail;

// components/ProductList.jsx
import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
import Axios from '../../axiosApi/Axios'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const axios = new Axios(); // Axios 인스턴스 생성

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('상품을 가져오는 데 오류가 발생했습니다:', error);
      }
    };

    fetchProducts();
  }, [axios]);

  // 상품 추가 함수
  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post('/api/products', newProduct);
      console.log('상품 추가 성공:', response);
      // 상품 추가 후 목록을 갱신
      setProducts((prevProducts) => [...prevProducts, response]);
    } catch (error) {
      console.error('상품 추가 오류:', error);
    }
  };

  // 예시 데이터
  const handleAddClick = () => {
    const newProduct = {
      name: '새로운 상품',
      price: 3000,
      image: '/images/new-product.jpg',
      category: '문구'
    };
    addProduct(newProduct);
  };

  return (
    <div className="product-list">
      <button onClick={handleAddClick}>상품 추가</button>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

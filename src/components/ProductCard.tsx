import React from 'react';
import '../styles/ProductCard.css';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description?: string | undefined;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="productcard-details">
        <h2 className="product-name">{title}</h2>
        <p className="product-price">{'R$'+price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
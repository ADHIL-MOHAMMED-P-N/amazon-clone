import React from "react";
import "./product.css";
import { useStateValue } from "./Stateprovider";

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

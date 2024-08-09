import styles from "./Card.module.scss";
import { useState } from "react";

function Card({ imageUrl, title, price, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/like-1.svg" alt="Unlicked" />
      </div>
      <img src={imageUrl} width={133} height={112} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
          alt="button-plus"
        />
      </div>
    </div>
  );
}

export default Card;

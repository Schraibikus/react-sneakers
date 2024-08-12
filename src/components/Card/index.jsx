import styles from "./Card.module.scss";
import { useState } from "react";

function Card({
  id,
  imageUrl,
  title,
  price,
  onPlus,
  onFavorite,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/like-2.svg" : "/img/like-1.svg"}
          alt="Unlicked"
        />
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

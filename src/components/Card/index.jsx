import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/like-1.svg" alt="Unlicked" />
      </div>
      <img src={props.imageUrl} width={133} height={112} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" width={32} height={32} alt="button-plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import AppContext from "../context";
import { useContext } from "react";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="Empty cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow-next.svg" alt="Arrow" />
        <span>Вернуться назад</span>
      </button>
    </div>
  );
};

export default Info;

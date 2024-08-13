import { Link } from "react-router-dom";

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" width={18} height={18} alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-5 cu-p">
          <Link to="/favorites">
            <img src="/img/heart.svg" width={18} height={18} alt="heart" />
          </Link>
        </li>
        <li>
          <img src="/img/profile.svg" width={18} height={18} alt="profile" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

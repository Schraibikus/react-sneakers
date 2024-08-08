function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" width={18} height={18} alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/profile.svg" width={18} height={18} alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img
              src="/img/sneakers/sneakers-1.jpg"
              width={133}
              height={112}
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="/img/plus.svg"
                  width={32}
                  height={32}
                  alt="button-plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/sneakers/sneakers-2.jpg"
              width={133}
              height={112}
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="/img/plus.svg"
                  width={32}
                  height={32}
                  alt="button-plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/sneakers/sneakers-3.jpg"
              width={133}
              height={112}
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="/img/plus.svg"
                  width={32}
                  height={32}
                  alt="button-plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/sneakers/sneakers-4.jpg"
              width={133}
              height={112}
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="/img/plus.svg"
                  width={32}
                  height={32}
                  alt="button-plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

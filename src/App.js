import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://5e28c566adecc842.mokky.dev/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://5e28c566adecc842.mokky.dev/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://5e28c566adecc842.mokky.dev/favorites")
      .then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://5e28c566adecc842.mokky.dev/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://5e28c566adecc842.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://5e28c566adecc842.mokky.dev/favorites/${obj.id}`);
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://5e28c566adecc842.mokky.dev/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

//screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  //get products data
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <HomeScreen products={products} />
            </Route>
            <Route exact path="/cart">
              <CartScreen />
            </Route>
            <Route exact path="/product/:id">
              <ProductScreen />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

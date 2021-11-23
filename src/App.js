import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
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

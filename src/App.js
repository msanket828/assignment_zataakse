import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductListing from "./components/ProductListing/ProductListing";
const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default App;

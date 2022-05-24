import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import OrderSummary from './OrderSummary';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Admin from './components/Admin';
import FeaturedProducts from './components/FeaturedProducts';
import GuestDetail from './components/GuestDetail';
import Guests from './components/Guests';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import UserDetail from './components/UserDetail';
import Users from './components/Users';
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
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="guests" element={<Guests />}>
          <Route path=":guestId" element={<GuestDetail />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

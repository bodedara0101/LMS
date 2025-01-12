import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SingleBook from "./components/miniComponents/SingleBook";
import Login from "./components/miniComponents/loginSingup/Login";
import Singup from "./components/miniComponents/loginSingup/Singup";
import Cart from "./components/miniComponents/Cart/Cart";
import Logout from "./components/miniComponents/logout/Logout";

// Admin Pages
import AddSAdmin from "./adminPanel/UI/pages/superadmin/AddSAdmin";
import Dasboard from "./adminPanel/UI/pages/Dashboard";
import Orders from "./adminPanel/UI/pages/orders/Orders";
import Inbox from "./adminPanel/UI/pages/inbox/Inbox";
import Users from "./adminPanel/UI/pages/users/Users";
import SuperAdmins from "./adminPanel/UI/pages/superadmin/Superadmins";
import Invoice from "./adminPanel/UI/pages/ecommerce/invonce/Invonce";
import AddProduct from "./adminPanel/UI/pages/productPages/AddProduct";
import Checkout from "./components/miniComponents/Cart/checkout/Checkout";
import Placed from "./components/miniComponents/Cart/Placed";
import SeeAll from "./adminPanel/UI/pages/productPages/SeeAll";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/singlebook" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placed/:id" element={<Placed />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin Routes */}
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/users" element={<Users />} />
          <Route path="/superadmins" element={<SuperAdmins />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addsuperadmin" element={<AddSAdmin />} />
          <Route path="/seeall" element={<SeeAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

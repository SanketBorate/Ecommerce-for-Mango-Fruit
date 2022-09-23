import logo from './logo.svg';
import './App.css';

import AboutUs from './pages/about_us';
import Contact from './pages/contact';
import OurProduct from './pages/our_product';
import { BrowserRouter , Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

//import S1 from './pages/s1';
import Home from './pages/home';

import AdminHome from './Dashboard/AdminHome';
import FarmerHome from './Dashboard/FarmerHome';



import Admin from './Signin/AdminSignIn';
import Farmer from './Signin/FarmerSignIn';
import Customer from './Signin/CustomerSignIn';
import FarmerSignUp from './Signup/FarmerSignUp';
import CustomerSignUP from './Signup/CustomerSignUp';
import ViewProducts from './AdminFunction/ViewProducts';
import AddProduct from './AddProduct/AddProduct';
import ViewCustomer from './AdminFunction/ViewCustomer';
import ViewFarmer from './AdminFunction/ViewFarmer';
import Logout from './Logout/logout';
import CustomerHome from './Dashboard/CustomerHome';
import AddtoCart from './Cart/AddtoCart';
import FarmerViewProduct from './AddProduct/FarmerViewProduct';
import MangoArraylist from './Products/MangoArraylist';
import Mangolist from './Products/Mangolist';
import Cart from './Cart/Cart';
import Orderdetailsforfarmer from './Order/Orderdetailsforfarmer';

 function App() {
  return (
       <div>
          {/*<Header></Header>*/}
         {/*console.log("funapp");*/} 
         <BrowserRouter >
           <Routes>
          {/* <Route path="/" element={<Home2/>}> */}
          <Route path="/" element={<Home/>}></Route >
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourProduct" element={<OurProduct />} />
          <Route path="/login" element={<Login/>} />


          <Route path="/CustomerSignIn" element={<Customer/>} />
          <Route path="/AdminSignIn" element={<Admin/>} />
          <Route path="/FarmerSignIn" element={<Farmer/>} />

          <Route path="/CustomerSignUp"element={<CustomerSignUP/>}/>
          <Route path="/ViewProducts" element={<ViewProducts/>} />

          <Route path="/FarmerSignUp"element={<FarmerSignUp/>}/>
          
          <Route path="/AdminHome" element={<AdminHome/>} />
          <Route path="/FarmerHome" element={<FarmerHome/>} />
          <Route path="/CustomerHome" element={<CustomerHome/>} />
          
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/ViewCustomer" element={<ViewCustomer/>} />
          <Route path="/ViewFarmer" element={<ViewFarmer/>} />
          <Route path="/FarmerViewProduct" element={<FarmerViewProduct/>} />
          
          <Route path="/AddtoCart" element={<AddtoCart/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Mangolist" element={<Mangolist/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/Orderdetailsforfarmer" element={<Orderdetailsforfarmer/>}></Route>
          </Routes>
          
          </BrowserRouter>
         {/* <AddProduct></AddProduct> */}
         
          {/*<Footer></Footer>*/}

          {/* <Mangolist></Mangolist> */}
          
          </div>

  );
}

export default App;


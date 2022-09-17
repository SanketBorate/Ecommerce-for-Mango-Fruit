import logo from './logo.svg';
import './App.css';

import AboutUs from './pages/about_us';
import Contact from './pages/contact';
import OurProduct from './pages/our_product';
import { BrowserRouter , Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

//import S1 from './pages/s1';
import Home from './pages/home';
import SignIn from './Signin/SignIn';





 function App() {
  return (
       <div>
          {/*<Header></Header>*/}
         {/*console.log("funapp");*/} 
         <BrowserRouter >
           <Routes>
          {/* <Route path="/" element={<Home2/>}> */}
          <Route path="/" element={<Home/>}>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourProduct" element={<OurProduct />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/SignIn" element={<SignIn/>} />
         
          </Route >
          
          
          
          </Routes>
          <Outlet></Outlet>
          </BrowserRouter>
          
         
          {/*<Footer></Footer>*/}
          </div>

  );
}

export default App;

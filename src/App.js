import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Headers";
import Home from "./Components/Home/Home";
// import NaviBar  from "./Components/NaviBar/NaviBar";
import ContactUs from "./Components/ContactUs/ContactUs";
import { Route, Routes } from 'react-router-dom';
import Products  from './Components/Products/Products';
import Service  from './Components/Service/Service';
import Offers from './Components/Offers/Offers'
import  AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import ShippingPolicy from './Components/ShippingPolicy/ShippingPolicy';
import TermsCondition from './Components/TermsCondition/TermsCondition';
import RefundsReplace from './Components/RefundsReplace/RefundsReplace';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Cctv from './Components/Cctv/Cctv';
import Laptop from './Components/Laptop/Laptop'; 
import Printer from './Components/Printer/Printer';
import HelpDesk from './Components/HelpDesk/HelpDesk';
import TrendingLaptops from './Components/TrendingLaptops/TrendingLaptops';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
    
    <Header />
   
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
         <Route path='/contactus' element={<ContactUs/>}/>
         <Route path='/helpdesk' element={<HelpDesk/>}/>
         <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
         <Route path='/termscondition' element={<TermsCondition/>}/>
         <Route path='/refundsreplace' element={<RefundsReplace/>}/>
         <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
         <Route path='/cctv' element={<Cctv/>}/>
         <Route path='/laptop' element={<Laptop/>}/>
         <Route path='/printer' element={<Printer/>}/>
         <Route path='/route' element={<TrendingLaptops />} />
    </Routes>
   <Footer/>
 
      </header>
    </div>
  );
}

export default App;

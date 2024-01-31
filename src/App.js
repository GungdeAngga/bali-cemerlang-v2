import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./view/landingPage/LandingPage";
import PackagesPage from "./view/packages/PackagesPage";
import PaymentPage from "./view/payment/PaymentPage";
import SpecialOfferPage from "./view/offer/SpecialOfferPage";
import AboutUsPage from "./view/aboutUs/AboutUsPage";
import GaleryPage from "./view/galery/GaleryPage";
import NewsPage from "./view/news/NewsPage";
import LoginPage from "./view/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/PackagesPage" element={<PackagesPage/>}/>
        <Route path="/PaymentPage" element={<PaymentPage/>}/>
        <Route path="/SpecialOfferPage" element={<SpecialOfferPage/>}/>
        <Route path="/AboutUsPage" element={<AboutUsPage/>}/>
        <Route path="/GaleryPage" element={<GaleryPage/>}/>
        <Route path="/NewsPage" element={<NewsPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

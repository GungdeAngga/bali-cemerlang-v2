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
import RegisterPage from "./view/register/RegisterPage";
import ForgotPasswordPage from "./view/forgotPassword/ForgotPasswordPage";
import VerifAccountPage from "./view/verifAccount/VerifAccountPage";
import PromoDetailsPage from "./view/Promo/PromoDetailsPage";
import SpecialOfferDetalisPage from "./view/offer/SpecialOfferDetalisPage";

import Dashboard from "./adminView/Dashboard";
import OfferPage from "./adminView/OfferPage";
import AddOfferPage from "./adminView/AddOfferPage";
import EditOfferPage from "./adminView/EditOfferPage";
import PromoPage from "./adminView/PromoPage";
import AddPromoPage from "./adminView/AddPromoPage";
import EditPromoPage from "./adminView/EditPromoPage";
import PackagePage from "./adminView/PackagePage";
import EditPackagePage from "./adminView/EditPackagePage";
import AddPackagePage from "./adminView/AddPackagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user */}
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/PackagesPage" element={<PackagesPage/>}/>
        <Route path="/PaymentPage" element={<PaymentPage/>}/>
        <Route path="/SpecialOfferPage" element={<SpecialOfferPage/>}/>
        <Route path="/AboutUsPage" element={<AboutUsPage/>}/>
        <Route path="/GaleryPage" element={<GaleryPage/>}/>
        <Route path="/NewsPage" element={<NewsPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage/>}/>
        <Route path="/VerifAccountPage" element={<VerifAccountPage/>}/>
        <Route path="/PromoDetailsPage" element={<PromoDetailsPage/>}/>
        <Route path="/SpecialOfferDetalisPage" element={<SpecialOfferDetalisPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        {/* admin */}
        <Route path="/AdminPage" element={<Dashboard/>}/>
        <Route path="/AdminOffer" element={<OfferPage/>}/>
        <Route path="/AdminTambahOffer" element={<AddOfferPage/>}/>
        <Route path="/AdminEditOffer" element={<EditOfferPage/>}/>
        <Route path="/AdminPromo" element={<PromoPage/>}/>
        <Route path="/AdminTambahPromo" element={<AddPromoPage/>}/>
        <Route path="/AdminEditPromo" element={<EditPromoPage/>}/>
        <Route path="/AdminPaket" element={<PackagePage/>}/>
        <Route path="/AdminTambahPaket" element={<AddPackagePage/>}/>
        <Route path="/AdminEditPaket" element={<EditPackagePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./view/landingPage/LandingPage";
import PackagesPage from "./view/packages/PackagesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/PackagesPage" element={<PackagesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

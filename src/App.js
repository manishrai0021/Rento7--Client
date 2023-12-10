import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SideNav from "./components/SideNav";
import Market from "./pages/Market";
import MarketItem from "./pages/MarketItem";
import Followers from "./pages/Followers";
import Follower from "./pages/Follower";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SideNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/marketitem/:id" element={<MarketItem />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/follower/:id" element={<Follower />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

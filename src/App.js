import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { Shop } from "./pages/Shop";
import { ItemDetails } from "./pages/ItemDetals/ItemDetails";
import { Upload } from "./pages/Upload";
import { Help } from "./pages/Help";
import { About } from "./pages/About";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    console.log(isSignedIn);
  }, [isSignedIn])
  return (
    <>
      <NavigationBar isSignedIn={isSignedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={
          isSignedIn ? 
          <Navigate to="/shop" /> : 
          <SignIn setIsSignedIn={setIsSignedIn}/>
          }/>
        <Route path="/register" element={
          isSignedIn ? 
          <Navigate to="/shop" /> : 
          <Register setIsSignedIn={setIsSignedIn}/>
          } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

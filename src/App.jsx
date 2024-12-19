import "./App.css";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ImageSection></ImageSection>}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="*" element={<>NOT Found 404 </>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Footer from './shared-components/Footer';
import Header from './shared-components/Header';
import NotFound from './error/404';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import ForgetPassword from './user/ForgetPassword';
import AboutUs from './pages/aboutPage/AboutUs';
import Album from './pages/album/Album';
import ConfirmOrderForm from './pages/placeorderPage/PlaceOrder';
import { ThemeProvider } from './contexts/ThemeContext';
import ReviewSection from './pages/review/Rewies';
import Credit from './pages/credit/Credit';


let App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <ThemeProvider>
      <>
        <Header />
        <Routes>
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/album" element={<Album />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/forget-password" element={<ForgetPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/reviews" element={<ReviewSection/>} />         
          <Route path="/place-order" element={<ConfirmOrderForm />} />
          <Route path="/credit" element={<Credit/>} />         
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<ComingSoon />} />
        <Route path="/shop" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

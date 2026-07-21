import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Places from './pages/Places';
import Culture from './pages/Culture';
import Food from './pages/Food';
import Nature from './pages/Nature';
import TravelInfo from './pages/TravelInfo';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="culture" element={<Culture />} />
        <Route path="food" element={<Food />} />
        <Route path="nature" element={<Nature />} />
        <Route path="travel-info" element={<TravelInfo />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;

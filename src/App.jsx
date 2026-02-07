import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ENT from './pages/ENT';
import Cardiology from './pages/Cardiology';
import BookAppointment from './pages/BookAppointment';
import TakeAdvice from './pages/TakeAdvice';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ent" element={<ENT />} />
          <Route path="cardiology" element={<Cardiology />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="take-advice" element={<TakeAdvice />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

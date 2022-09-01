import { Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes></Routes>
      <Footer />
    </>
  );
}

export default App;

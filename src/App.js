import { Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes></Routes>
    </>
  );
}

export default App;

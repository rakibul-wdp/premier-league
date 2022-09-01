import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

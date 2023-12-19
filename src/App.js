import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './pages/Billing';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/billing' element={<Billing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/account' element={<Account isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/:id' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

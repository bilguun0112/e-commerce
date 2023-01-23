import './App.css';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainHome from './Home';
import LogIn from './components/login';
import CartPage from './components/cartPage';
import { useState } from 'react';


function App() {
  const [wish, setWish] = useState([])
  const [cart, setCart] = useState([])


  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome wish={wish} setWish={setWish} cart={cart} setCart={setCart} />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/cart' element={<CartPage wish={wish} setWish={setWish} cart={cart} />} />
      </Routes>
    </>
  );



}

export default App;

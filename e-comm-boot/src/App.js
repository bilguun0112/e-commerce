import './App.css';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainHome from './Home';
import LogIn from './components/login';
import { useState } from 'react';
import { Help, Search } from './components/help';
import MainMenu from './components/MainMenu';
import Footer from './components/footer';
import ModalBody from './components/showModal';
import Cart from './components/cart';


function App() {
  const [wish, setWish] = useState([])
  const [cart, setCart] = useState([])


  return (
    <>
      {/* Header */}
      <Help />
      <Search wish={wish} setWish={setWish} cart={cart} />
      <MainMenu />


      <Routes>
        <Route path='/' element={<MainHome wish={wish} setWish={setWish} cart={cart} setCart={setCart} />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>

      <Footer />
      <ModalBody />
    </>
  );



}

export default App;

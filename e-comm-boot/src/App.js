import './App.css';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainHome from './Home';
import LogIn from './components/login';
import Cart from './components/cart';


function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </>
  );



}

export default App;

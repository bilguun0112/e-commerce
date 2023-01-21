import './App.css';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainHome from './Home';
import LogIn from './components/login';


function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />

      </Routes>
    </>
  );



}

export default App;

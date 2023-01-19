import './App.css';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainHome from './Home';


function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  );



}

export default App;

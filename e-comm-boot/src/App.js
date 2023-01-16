import './App.css';

import { Help, Search } from './components/help';
import MainMenu from './components/MainMenu';
import Banner from './components/carousel';
import Catalogies1 from './components/catalogi1';
import SubproductCard from './components/subProductCard';
import Sale from './components/sale';
import Frame53 from './components/frame53';
import QuadFrame from './components/tripleFrame';
import wishList from './Data/wish';
import { useState } from 'react';
import Footer from './components/footer';
import ModalBody from './components/showModal';



function App() {
  const [wish, setWish] = useState(wishList)


  return (
    <div className="container">
      <Help />
      <Search wish={wish}/>
      <MainMenu />
      <Banner />
      <Catalogies1 />
      <SubproductCard wish={wish} setWish={setWish}/>
      <Sale />
      <Frame53/>
      <QuadFrame/>
      <Footer/>
      <ModalBody/>
    </div>
  );



}

export default App;

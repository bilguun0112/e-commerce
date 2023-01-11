import './App.css';

import { Help, Search } from './components/help';
import MainMenu from './components/MainMenu';
import Banner from './components/carousel';
import Catalogies1 from './components/catalogi1';
import SubproductCard from './components/subProductCard';
import Sale from './components/sale';
import Frame53 from './components/frame53';
import QuadFrame from './components/tripleFrame';



function App() {
  return (
    <div className="container">
      <Help />
      <Search />
      <MainMenu />
      <Banner />
      <Catalogies1 />
      <SubproductCard />
      <Sale />
      <Frame53/>
      <QuadFrame/>
    </div>
  );



}

export default App;

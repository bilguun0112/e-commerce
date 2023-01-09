import logo from './logo.svg';
import './App.css';

import { Help,  Search } from './components/help';
import MainMenu from './components/MainMenu';
import Banner from './components/carousel';
import Catalogies1 from './components/catalogi1';
import SubproductCard from './components/subProductCard';
import HalfRating from './components/ratingStar';



function App() {
  return (
    <div className="container">
      <Help/>
      <Search/>
      <MainMenu/>
       <Banner/>
      <Catalogies1/>
     <SubproductCard />
   
    </div>
  );


  
}

export default App;

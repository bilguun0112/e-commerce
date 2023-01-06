import logo from './logo.svg';
import './App.css';

import { Help,  Search } from './components/help';
import MainMenu from './components/MainMenu';
import Banner from './components/carousel';
import Catalogies from './components/catalogi';
import Gallery from './components/sliderTest';


function App() {
  return (
    <div className="container">
      <Help/>
      <Search/>
      <MainMenu/>
      <Banner/>
      <Catalogies/>
      <Gallery />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Help,  Search } from './components/help';
import MainMenu from './components/MainMenu';
import Banner from './components/banner';

function App() {
  return (
    <div className="container">
      <Help/>
      <Search/>
      <MainMenu/>
      <Banner/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Help,  Search } from './components/help';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="container">
      <Help/>
      <Search/>
      <MainMenu/>
    </div>
  );
}

export default App;

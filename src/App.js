import logo from './logo.svg';
import './App.css';

import Row from './components/Row';
import Column from './components/Column';
import Color from './components/Color';
import Cell from './components/Cell';
import Tabledisplay from './components/Tabledisplay';


function App() {
  return (
    <div className="App">
     <h1> DOM III Chanllenge</h1>
     <Row />
    <Column/>
    <Color />
    <Cell />
    <Tabledisplay/>
    </div>
  );
}

export default App;

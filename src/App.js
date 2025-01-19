import Header from './components/header';
import Footer from './components/footer';
import Fundacion from './components/fundacion';
import './App.css';

import ProgramasFundacion from './components/programas';
import Donaciones from './components/donaciones';
import Mapa from './components/mapa';

import Principal from './components/principal';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="inicio"><Principal /></div>
        <div id="fundacion"><Fundacion /></div>
        <div id="programas"><ProgramasFundacion /></div>
        <div id="donaciones"><Donaciones /></div>
        <div id="contactanos"><Mapa /></div>
      </main>
      <Footer />
    </div>
  );
};


export default App;
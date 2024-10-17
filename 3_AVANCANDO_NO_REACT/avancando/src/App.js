import ManageData from './components/ManageData';
import './App.css';

import City from "./assets/city.jpg";


function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem bonita" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City} alt="" />

        <ManageData></ManageData>
      </div>
    </div>
  );
}

export default App;

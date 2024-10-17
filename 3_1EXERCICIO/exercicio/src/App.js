import ManageData from './components/ManageData';
import City from './/assets/city.jpg'

import './App.css';


function App() {
  return (
    <div>
      <div><img src="./img1.jpg" alt=""></img></div>
      <div><img src={City} alt=""></img></div>
      <ManageData></ManageData>
    </div>
  );
}

export default App;

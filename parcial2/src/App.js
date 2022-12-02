import './App.css';
import Bandas from './components/bandas';
import BandaDetail from './components/bandaDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bandas />} />
         <Route path="/bandas" element={<Bandas />} />
         <Route path="/bandas/:bandaId" element={<BandaDetail />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;

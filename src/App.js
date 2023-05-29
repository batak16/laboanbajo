import './App.css';
import Index from './pages/Index';
import Gallery from './pages/Gallery';
import Hotel from './pages/Hotel';
import Reserve from './pages/Reserve';
import Detail from './pages/Detail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/reserve' element={<Reserve />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/hotel' element={<Hotel />}/>
          <Route path='/detail' element={<Detail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

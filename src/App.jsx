import './App.css';
import Home from './pages/Home';
import Sidebar from '../../my-project/src/components/Sidebar';
import About from './pages/About';
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interests from './pages/Interests';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/interests' element={<Interests/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App

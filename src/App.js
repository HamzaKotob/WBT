import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicePage from './Pages/ServicePage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Service" element={<ServicePage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

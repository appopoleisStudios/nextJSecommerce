import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './components/Product';
import Productinfo from './components/Productinfo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productInfo' element={<Productinfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

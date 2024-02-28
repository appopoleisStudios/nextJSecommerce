import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './components/Product';
import Productinfo from './components/Productinfo';
import Men from './components/Men';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productInfo' element={<Productinfo />} />
          <Route path='/Men' element={<Men />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

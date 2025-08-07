import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <>
      <Navbar />
      <Outlet context={{ cart, addToCart }} />
    </>
  );
}

export default App;


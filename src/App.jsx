import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';

function App() {
  const [productsInfo, setProductsInfo] = useState([]);

  return (
    <>
      <Products
        productsInfo={productsInfo}
        setProductsInfo={setProductsInfo}
      ></Products>
    </>
  );
}

export default App;


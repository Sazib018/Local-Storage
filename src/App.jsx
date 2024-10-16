import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';
import Carts from './components/Carts/Carts';

function App() {
  const [productsInfo, setProductsInfo] = useState([]);


  return (
    <div className='flex justify-between'>
      <Products
        productsInfo={productsInfo}
        setProductsInfo={setProductsInfo}
      ></Products>
      <div className=' border-l-2 border-red-600 pl-2 w-[300px]'>
        <Carts
          productsInfo={productsInfo}
        ></Carts>
      </div>
    </div>
  )
}

export default App;


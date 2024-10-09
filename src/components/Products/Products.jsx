import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({setProductsInfo , productsInfo }) => {

    const [addProducts, setAddProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProductsInfo(data))
    }, [])

    return (
        <div>
            <h1 className='text-xl font-bold'>Happy Shopping</h1>
          <div className='grid grid-cols-3 gap-8'>
          {
                productsInfo.map(product => 
                <ProductCard 
                key={product.id} 
                product={product}
                addProducts={addProducts}
                setAddProducts={setAddProducts}
                ></ProductCard>)
            }
          </div>
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from "react";
import axios from '../utils/Axios'

function Shop() {
  const [products, setProduct] = useState([]);

  const getProducts = () => {

    axios
      .get('/products')
      .then((products) => {
        console.log(products);
        setProduct(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getProducts()
    
    return ()=>{
      console.log('Deleted...')
    }


  },[]);


  return (
    <>
      <div className="w-full h-fit bg-zinc-100">
        <h1 className="py-4 text-4xl font-bold flex justify-center">Shop</h1>

        <button
          onClick={getProducts}
          className="px-2 py-1 bg-orange-400 rounded-sm ml-10"
        >
          Add Items
        </button>

        <div className="mt-5 flex justify-center">
          <ul className>
            <h1 className="text-4xl font-bold pb-5">Products</h1>

            {products.map((item) => (
              <li key={item.id} className="pl-6 px-2 py-2 bg-orange-200 mb-2">{item.id}. {item.title}</li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
}

export default Shop;

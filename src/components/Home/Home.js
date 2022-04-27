import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import './Home.css'
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetch('https://mysterious-cove-78800.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])
  return (
      <div>
          <h1 className="text-center">This is home</h1>
          <div className="product-container container">
          
          
          {
              products.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>)
          }
      </div>
      </div>
  );
};

export default Home;

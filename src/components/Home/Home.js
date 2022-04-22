import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetch('product.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])
  return (
      <div>
          {
              products.length
          }
      </div>
  );
};

export default Home;

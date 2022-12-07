import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from 'react-redux'

const Home = () => {
  const [products, setProducts] = useState([]);

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  if (!products.length) {
    return <p className="text-center text-3xl text-sky-300 mt-10">Loading...</p>
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
      }
    </div>
  );
};

export default Home;

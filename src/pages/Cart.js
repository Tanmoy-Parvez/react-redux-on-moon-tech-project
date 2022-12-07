import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


const Cart = () => {

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        state?.cart?.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
      }
    </div>
  );
};

export default Cart;

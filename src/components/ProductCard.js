import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { actionCreator, addToCart, removeFromCart } from "../redux/actionCreators/actionCreators";
import { RiDeleteBin2Line } from "react-icons/ri";


const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { pathname } = useLocation()


  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-sky-600 relative'
    >
      {pathname.includes("cart") && <div className="absolute top-2 right-2 text-white bg-sky-500 w-8 h-8 rounded-full grid place-items-center">
        <p>{product.quantity}</p>
      </div>}

      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, index) => {
            return <li key={index} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {pathname.includes("cart") ? <button onClick={() => dispatch(removeFromCart(product))} className='bg-red-400 w-full rounded-full py-1 px-2 flex justify-center items-center text-white text-bold'>
          <RiDeleteBin2Line className="mr-2 text-xl" /> Remove
        </button>
          :
          <>

            <button onClick={() => dispatch(addToCart(product))} className='bg-sky-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
              Add to cart
            </button>
            <button
              title='Add to wishlist'
              className='bg-sky-500  py-1 px-2 rounded-full'
            >
              <BiListPlus className='text-white' />
            </button>
          </>

        }

      </div>
    </div>
  );
};

export default ProductCard;

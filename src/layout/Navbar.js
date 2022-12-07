import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.length);
  return (
    <nav className='h-14 bg-sky-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-sky-500'>
        <h1 className='flex-1'>Moon Tech</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li title='Wishlist' className='bg-sky-500 p-2 rounded-full'>
          <Link to='/'>
            <IoIosListBox className='text-white' />
          </Link>
        </li>
        <li>
          <p className="text-white absolute z-10 top-3 ml-5 bg-sky-700 w-5 h-5 rounded-full grid place-content-center">{cart?.length}</p>
          <p title='cart' className='bg-sky-500 p-2 rounded-full relative'>
            <Link to='/cart'>
              <BsFillCartFill className='text-white ' />
            </Link>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

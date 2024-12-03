import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
 

function Wishlist() {
  return (
    <>
      <h1 className='pt-32 text-center text-4xl text-violet-900'>Wishlist</h1>


      <div className='mt-5 px-10 mb-10 md:grid grid-cols-4'>
        <div className=" p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="no image" className='w-full h-60' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio blanditiis vel veniam nulla unde consequatur doloremque. Cupiditate aperiam, vero aut nesciunt sint accusantium deserunt est error impedit ducimus laudantium!</p>
            <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ 70</span></p>
            <div className="flex justify-between">
              <button className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash} /></button>
              <button className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="no image" className='w-full h-60' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio blanditiis vel veniam nulla unde consequatur doloremque. Cupiditate aperiam, vero aut nesciunt sint accusantium deserunt est error impedit ducimus laudantium!</p>
            <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ 70</span></p>
            <div className="flex justify-between">
              <button className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash} /></button>
              <button className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className=" p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="no image" className='w-full h-60' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio blanditiis vel veniam nulla unde consequatur doloremque. Cupiditate aperiam, vero aut nesciunt sint accusantium deserunt est error impedit ducimus laudantium!</p>
            <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ 70</span></p>
            <div className="flex justify-between">
              <button className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash} /></button>
              <button className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className=" p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="no image" className='w-full h-60' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio blanditiis vel veniam nulla unde consequatur doloremque. Cupiditate aperiam, vero aut nesciunt sint accusantium deserunt est error impedit ducimus laudantium!</p>
            <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ 70</span></p>
            <div className="flex justify-between">
              <button className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash} /></button>
              <button className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full pt-10 md:grid grid-cols-3">
        <div className=""></div>
        <div className="">
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no img" className='w-full h-80' />
        </div>
        <div className=""></div>

      </div>
    </>
  )
}

export default Wishlist
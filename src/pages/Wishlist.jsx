import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlist)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  return (
    <>
      <h1 className='pt-32 text-center text-4xl text-violet-900'>Wishlist</h1>

      {wishlistArray?.length > 0 ?
        <div className='mt-5 px-10 mb-10 md:grid grid-cols-4'>

          {wishlistArray?.map((item) => (
            <div className=" p-2">
              <div className='p-3 rounded shadow-lg'>
                <img src={item?.image} className='w-full h-60' />
                <h4 className='text-center text-3xl mt-5'>{item?.title.slice(0,20)}</h4>
                <p className='text-justify mt-5'>{item.description.slice(0,100)}...</p>
                <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ {item?.price}</span></p>
                <div className="flex justify-between">
                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash} /></button>
                  <button onClick={()=>wishes(item)} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        :
        <div className="w-full pt-10 md:grid grid-cols-3">
          <div className=""></div>
          <div className="">
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no img" className='w-full h-80' />
          </div>
          <div className=""></div>
        </div>}


    </>
  )
}

export default Wishlist
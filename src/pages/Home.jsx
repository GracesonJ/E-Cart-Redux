
import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import userFetch from '../hooks/userFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistSlice'


function Home() {
  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <div className='pt-32 px-10 mb-10 md:grid grid-cols-4'>
      {data?.length > 0 &&
        data?.map((item) => (
          <div className=" p-2">
            <div className='p-3 rounded shadow-lg'>
              <img src={item?.image} className='w-full h-60' />
              <h4 className='text-center text-2xl'>{item?.title.slice(0,20)}</h4>
              <p className='text-justify pt-5'>{item.description.slice(0,100)}...</p>
              <p className='text-2xl p-3'>Price: <span className='text-violet-600'>$ {item?.price}</span></p>
              <div className="flex justify-between">
                <button onClick={()=>dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
                <button className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home
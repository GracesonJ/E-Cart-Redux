import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {

  const [total, setTotal] = useState(0)

  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))

    }
  }
  console.log(total);

  const handleCheckout = ()=>{
    alert("Order placed Successfully")
    dispatch(emptyCart())
    navigate('/')
  }
  
  useEffect(()=>{
    getTotal()
  },[cartArray])

  

  return (
    <>
      <div className="pt-36">
        <h1 className=' text-center text-4xl text-violet-900'>Cart</h1>

        {cartArray?.length>0?
          <div className="md:grid grid-cols-[2fr_1fr] m-10">
          <div className="md:py-5 md:px-20 p-3">
            <table className='w-full border border-gray-500'>
              <thead>
                <tr>
                  <th className='border border-gray-100 p-3 bg-violet-500 text-white'>#</th>
                  <th className='border border-gray-100 p-3 bg-violet-500 text-white'>Title</th>
                  <th className='border border-gray-100 p-3 bg-violet-500 text-white'>Image</th>
                  <th className='border border-gray-100 p-3 bg-violet-500 text-white'>Price</th>
                  <th className='border border-gray-100 p-3 bg-violet-500 text-white'>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray?.map((item, index)=>(
                  <tr>
                  <td className='border border-gray-100 p-3'>{index+1}</td>
                  <td className='border border-gray-100 p-3'>{item?.title}</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="no image" style={{ width: "150px", height: "100px" }} /></td>
                  <td className='border border-gray-100 p-3'>$ {item?.price}</td>
                  <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-700 text-white py-3 px-5 rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
                ))
                  }
              </tbody>
            </table>
          </div>
          <div className="pt-5 px-10">
            <div className="p-5 shadow-lg">
              <h1 className='text-center text-3xl'>Cart Summary</h1>
              <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
              <p className='mt-2 text-xl'>Grand Total : $ {total}</p>
              <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:border hover:bg-white hover:border-green-600 hover:text-green-600'>Checkout</button>
            </div>

          </div>
        </div>

          :
        <div className="w-full pt-10 md:grid grid-cols-3">
          <div className=""></div>
          <div className="flex justify-center items-center flex-col my-10">
            <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="no img" className='w-full h-80' />
            <Link to={'/'}><button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home</button></Link>
          </div>
          <div className=""></div>
        </div>}

      </div>
    </>
  )
}

export default Cart
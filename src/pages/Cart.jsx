import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className="pt-36">
        <h1 className=' text-center text-4xl text-violet-900'>Cart</h1>
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
                <tr>
                  <td className='border border-gray-100 p-3'>1</td>
                  <td className='border border-gray-100 p-3'>Dummy</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="no image" style={{ width: "150px", height: "100px" }} /></td>
                  <td className='border border-gray-100 p-3'>$ 80</td>
                  <td className='border border-gray-100 p-3 text-center'><button className='bg-red-700 text-white py-3 px-5 rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-5 px-10">
            <div className="p-5 shadow-lg">
              <h1 className='text-center text-3xl'>Cart Summary</h1>
              <p className='mt-4 text-xl'>Total number of products</p>
              <p className='mt-2 text-xl'>Grand Total : $ 700</p>
              <button className='w-full bg-green-600 text-white p-3 mt-4 hover:border hover:bg-white hover:border-green-600 hover:text-green-600'>Checkout</button>
            </div>

          </div>
        </div>


        <div className="w-full pt-10 md:grid grid-cols-3">
          <div className=""></div>
          <div className="flex justify-center items-center flex-col my-10">
            <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="no img" className='w-full h-80' />
            <Link to={'/'}><button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home</button></Link>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  )
}

export default Cart
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const UnderConstruction = () => {
    
    const { navigate } = useContext(ShopContext)

  return (
    <div>
        <button className='bg-black text-white border-none  px-4 py-2' onClick={()=>navigate('/cart')}>Go Back</button>
        <p className='text-center sm:text-2xl mt-10 py-5 md:text-2xl'>This Method is Under Construction</p>
    </div>
  )
}

export default UnderConstruction
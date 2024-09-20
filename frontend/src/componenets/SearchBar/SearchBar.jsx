import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { assets } from '../../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const location = useLocation()
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" name="search" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="search_icon" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer ml-3' src={assets.cross_icon} alt="cross_icon" />
    </div>
  ) : null
}

export default SearchBar
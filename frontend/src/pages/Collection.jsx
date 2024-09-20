import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../componenets/Title/Title'
import ProductItem from '../componenets/ProductItem/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevent")

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subcategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()
    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    if(category.length>0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subcategory.length>0){
      productsCopy = productsCopy.filter(item =>subcategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>a.price - b.price))
        console.log("low-high")
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>b.price - a.price))
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(()=>{
    applyFilter()
  },[category, subcategory, search, showSearch, products])

  useEffect(()=>{
    sortProduct()
  }, [sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option */}

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-4'>FILTER
          <img className={`h-3 sm:hidden transition delay-75 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="dropdown_icon" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="gender" value={`Men`} onChange={toggleCategory} /> Men  
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="gender" value={`Women`} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="gender" value={`Kids`} onChange={toggleCategory} /> Kids
            </p>
          </div>  
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="gender" value={`Topwear`} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="gender" value={`Bottomwear`} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="gender" value={`Winterwear`} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
          </div>
      </div>

      {/* text right side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </select>
        </div>
        {/* Map product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>{
              return (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Collection
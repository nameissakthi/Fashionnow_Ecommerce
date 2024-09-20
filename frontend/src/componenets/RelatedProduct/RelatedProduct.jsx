import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import ProductItem from "../ProductItem/ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{

        if(products.length>0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter(item=>category === item.category)
            productsCopy = productsCopy.filter(item=>subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,5));
        }

    },[products])

  return (
    <div className="my-24">
        <div className="text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCT"}/>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    related.map((item, index)=>{
                        return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    })
                }
            </div>
        </div>
    </div>
  );
};

export default RelatedProduct;

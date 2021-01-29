import React from 'react'
import "../product/product.css"
import  {useSelector} from "react-redux";
import Card from "../card/card"



const Product = () => {

const state = useSelector(state => state ? state.products : [])

    return (
        <div className="product-container">
          {state ? state.map((product)=>{
 return <Card producto={product}/>
          }) : null } 
        </div>
    )
}

export default Product

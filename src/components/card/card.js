 import React from "react";
import {useDispatch} from "react-redux"
import {addToCart} from "../../redux/action-creator"


const Card = ({producto}) => {

    const {product, img, description, price, id} = producto;
    const dispatch = useDispatch();

  return <div>

      <img src = {img} />
      {product}
      <br/>
      por {price}
      <button onClick={()=> dispatch (addToCart(id))} >Comprar</button>

  </div>;
};

export default Card;
 
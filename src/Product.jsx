import React from 'react';



const Product = (props) => {
    return (
     <div className="block">

   <div className="id"> {props.id}</div> 
   <div className="image"><img src= {props.image} alt="" /></div>
   <div className="name"> {props.name}</div>
   <div className="price">{props.price}</div> 
    </div>
    )
}
        

export default Product;
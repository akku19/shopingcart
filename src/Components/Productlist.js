import React, { useState } from 'react'
import Filter from '../Common/Filter';
import data from './data.json'
import Product from './Product';
const Productlist = () => {
   const[products,setproducts] = useState(data.products);
   const[sort,setSort] = useState('');
   const[size,setsize] = useState('');

   const sortProduct = (sortvalue)=>{
     setsize(setSort)
    if(sortvalue=='Lower'){
      const newarra = products.slice().sort((a,b)=>{
        return a.price - b.price;
      })
      setproducts(newarra)
    }else{
      const newarra = products.slice().sort((a,b)=>{
        return b.price - a.price;
      })
      setproducts(newarra)
    }
 
       
   }
   const sizeProduct = (value)=>{
     setsize(value);
     if(value==0){
       setproducts(products)
     }else{
      setproducts(data.products.filter(product=>product.availableSizes.indexOf(value)>=0))
     }
    
    
}
  return (
   <>
  <Filter products={products} sort ={sort} size={size} sortProduct={sortProduct} sizeProduct={sizeProduct}/>

<div className="container">
  <hr />
</div>

<div className="container">
  <div className="row">
    
      {products.map((items,index)=>{
         return <Product products={items} key={index} />
      })}


</div>
</div>
</>
  )
}

export default Productlist
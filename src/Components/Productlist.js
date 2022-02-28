import React, { useState } from 'react'
import Filter from '../Common/Filter';
import data from './data.json'
import Product from './Product';
const Productlist = () => {
   const[products,setproducts] = useState(data.products);
   const[sort,setSort] = useState('');
   const[size,setsize] = useState('');
   const[CartItems,setCartItems] = useState([]);
  
   const addToCart = (product)=>{
     let alreadCart = false;
         const CartItem = CartItems.slice();
         CartItem.forEach((item)=>{
           if(item._id==product._id){
             
             console.log(`item id ${item._id} and proudtc id ${product._id} count ${product.count}`);
            item.count++
             //console.log(CartItems.indexOf(product._id));
             alreadCart = true;
           }
         })
         if(!alreadCart){
          console.log('exit');
          CartItem.push(product);
          setCartItems(CartItem);
         }
        
   }

   const sortProduct = (sortvalue)=>{
     setsize(setSort)
    if(sortvalue=='Lower'){
      const newarra = products.slice().sort((a,b)=>{
        return a.price - b.price;
      })
      setproducts(newarra)
    }else if(sortvalue=='higher'){
      const newarra = products.slice().sort((a,b)=>{
        return b.price - a.price;
      })
      setproducts(newarra)
    }else{
      const newarra = products.slice().sort((a,b)=>{
        return b.price - a.price;
      })
    }       
   }
   const sizeProduct = (value)=>{
     setsize(value);
     if(value==0){
       setproducts(products)
       sortProduct(size)
     }else{
      setproducts(data.products.filter(product=>product.availableSizes.indexOf(value)>=0))
      sortProduct(size)
     }   
}
const removeCart = (pid)=>{
  console.log(pid);
  const items = CartItems.filter(item => item._id !== pid);
  setCartItems(items);
}
  return (
   <>
  <Filter removeCart={removeCart} products={products} sort ={sort} size={size} sortProduct={sortProduct} sizeProduct={sizeProduct}  addToCart={CartItems}/>

<div className="container">
  <hr />
</div>

<div className="container">
  <div className="row">
    
      {products.map((items,index)=>{
         return <Product products={items} key={index} addToCart={addToCart} />
      })}


</div>
</div>
</>
  )
}

export default Productlist
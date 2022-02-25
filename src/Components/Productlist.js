import React, { useState } from 'react'
import data from './data.json'
import Product from './Product';
const Productlist = () => {
   const[products,setproducts] = useState(data.products);
   const[Sort,setSort] = useState([]);
   const[size,setsize] = useState([]);
  return (
   <>
   <div className="container pt-5">
  <div className="row align-items-center justify-content-between">

    <div className="col-lg-2 col-md-3 col-sm-4 col-7">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">42 Items</span>
        </div>
        <select name="" className="form-control form-control-sm">
          <option value="">12</option>
          <option value="">24</option>
          <option value="">48</option>
        </select> 
      </div>
    </div>
    
    <div className="col-md-3 col-5 text-right order-md-1">
        <a href="#" className="btn btn-primary grid-view btn-sm">
          <i className="fa fa-th-large"></i>
        </a>
        <a href="#" className="btn btn-primary list-view btn-sm">
          <i className="fa fa-bars"></i>
        </a>
    </div>

    <div className="col-md-3 order-md-0 mt-2 mt-md-0">
      <select className="form-control form-control-sm">
        <option value="">Sort By</option>
        <option value="">Popylar</option>
        <option value="">Name</option>
      </select>  
    </div>
    
  </div>
</div>

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


<div className="container">
  <hr />
</div>

<div className="container pb-5">
  <div className="row align-items-center justify-content-between">

    <div className="col-lg-2 col-md-3 col-sm-4 col-7">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">42 Items</span>
        </div>
        <select name="" className="form-control form-control-sm">
          <option value="">12</option>
          <option value="">24</option>
          <option value="">48</option>
        </select> 
      </div>
    </div>
    
    <div className="col-5 text-right">
        <a href="#" className="btn btn-primary grid-view btn-sm">
          <i className="fa fa-th-large"></i>
        </a>
        <a href="#" className="btn btn-primary list-view btn-sm">
          <i className="fa fa-bars"></i>
        </a>
    </div>
    
  </div>
</div>
   </>
  )
}

export default Productlist
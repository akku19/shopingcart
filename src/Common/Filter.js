import React from 'react'

const Filter = (props) => {
    
  return (
    <div className="container pt-5">
    <div className="row align-items-center justify-content-between">
  
      <div className="col-lg-2 col-md-3 col-sm-4 col-7">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">{props.products.length} Items</span>
          </div>
          <select name="" className="form-control form-control-sm" value={props.sort} onChange={(e)=>{props.sizeProduct(e.target.value)}}>
            <option value="XL">XL</option>
            <option value="M">M</option>
            <option value="XXL">XXL</option>
            <option value="X">X</option>
            <option value="L">L</option>
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
        <select className="form-control form-control-sm" onChange={(e)=>{props.sortProduct(e.target.value)}}>
          <option value="all">Sort By</option>
          <option value="Lower">Lower</option>
          <option value="higher">Higher</option>
        </select>  
      </div>
      
    </div>
  </div>
  )
}

export default Filter
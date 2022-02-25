import React from 'react'

const Productlist = () => {
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

    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="d-flex justify-content-between position-absolute w-100">
          <div className="label-new">
            <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
              <i className="fa fa-star" aria-hidden="true"></i>
              <span className="ml-1">New</span>
            </span>
          </div>
          <div className="label-sale">
            <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
              <i className="fa fa-tag" aria-hidden="true"></i>
              <span className="ml-1">Sale</span>
            </span>
          </div>
        </div>
        <a href="#">
          <img src="https://picsum.photos/700/550" className="card-img-top" alt="Product" />
        </a>
        <div className="card-body px-2 pb-2 pt-1">
          <div className="d-flex justify-content-between">
            <div>
              <p className="h4 text-primary">$129,99</p>
            </div>
            <div>
              <a href="#" className="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p className="text-warning d-flex align-items-center mb-2">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </p>
          <p className="mb-0">
            <strong>
              <a href="#" className="text-secondary">Product Title</a>
            </strong>
          </p>
          <p className="mb-1">
            <small>
              <a href="#" className="text-secondary">Brands</a>
            </small>
          </p>
          <div className="d-flex mb-3 justify-content-between">
            <div>
              <p className="mb-0 small"><b>UPC: </b> 2310010</p>
              <p className="mb-0 small"><b>PART#: </b> 2121</p>
              <p className="mb-0 small"><b>MPN#: </b> mpn22651</p>
            </div>
            <div className="text-right">
              <p className="mb-0 small"><b>Free Shipping</b></p>
              <p className="mb-0 small"><b>MSRP: </b> $119.99</p>
              <p className="mb-0 small"><b>REG: </b> $19.99</p>
              <p className="mb-0 small text-primary">
                <span className="font-weight-bold">Save</span> $20.00 (16%)
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="col px-0">
              <button className="btn btn-outline-primary btn-block">
                Add To Cart 
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              </button>
            </div>
            <div className="ml-2">
              <a href="#" className="btn btn-outline-success" data-toggle="tooltip" data-placement="left" title="Add to Wishlist">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="labels d-flex justify-content-between position-absolute w-100">
          <div className="label-new">
          </div>
          <div className="label-sale">
            <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
              <i className="fa fa-tag" aria-hidden="true"></i>
              <span className="ml-1">Sale</span>
            </span>
          </div>
        </div>
        <a href="#">
          <img src="https://picsum.photos/700/550" className="card-img-top" alt="Product" />
        </a>
        <div className="card-body px-2 pb-2 pt-1 d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div>
              <p className="h4 text-primary">$130,00</p>
            </div>
            <div>
              <a href="#" className="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p className="text-warning d-flex align-items-center mb-2">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </p>
          <p className="mb-0">
            <strong>
              <a href="#" className="text-secondary">Product Title</a>
            </strong>
          </p>
          <p className="mb-1">
            <small>
              <a href="#" className="text-secondary">Brands</a>
            </small>
          </p>
          <div className="d-flex mb-3 justify-content-between">
            <div>
              <p className="mb-0 small"><b>PART#: </b> 2121</p>
              <p className="mb-0 small"><b>MPN#: </b> mpn22651</p>
            </div>
            <div className="text-right">
              <p className="mb-0 small"><b>MSRP: </b> $119.99</p>
              <p className="mb-0 small"><b>REG: </b> $19.99</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-auto">
            <div className="col px-0">
              <button className="btn btn-outline-primary btn-block">
                Add To Cart 
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              </button>
            </div>
            <div className="ml-2">
              <a href="#" className="btn btn-outline-success" data-toggle="tooltip" data-placement="left" title="Add to Wishlist">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="labels d-flex justify-content-between position-absolute w-100">
          <div className="label-new">
            <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
              <i className="fa fa-star" aria-hidden="true"></i>
              <span className="ml-1">New</span>
            </span>
          </div>
          <div className="label-sale">
            <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
              <i className="fa fa-tag" aria-hidden="true"></i>
              <span className="ml-1">Sale</span>
            </span>
          </div>
        </div>
        <a href="#">
          <img src="https://picsum.photos/700/550" className="card-img-top" alt="Product" />
        </a>
        <div className="card-body px-2 pb-2 pt-1">
          <div className="d-flex justify-content-between">
            <div>
              <p className="h4 text-primary">$150,20</p>
            </div>
            <div>
              <a href="#" className="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p className="text-warning d-flex align-items-center mb-2">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </p>
          <p className="mb-0">
            <strong>
              <a href="#" className="text-secondary">Product Title</a>
            </strong>
          </p>
          <p className="mb-1">
            <small>
              <a href="#" className="text-secondary">Brands</a>
            </small>
          </p>
          <div className="d-flex mb-3 justify-content-between">
            <div>
              <p className="mb-0 small"><b>UPC: </b> 2310010</p>
              <p className="mb-0 small"><b>PART#: </b> 2121</p>
              <p className="mb-0 small"><b>MPN#: </b> mpn22651</p>
            </div>
            <div className="text-right">
              <p className="mb-0 small"><b>Free Shipping</b></p>
              <p className="mb-0 small"><b>MSRP: </b> $119.99</p>
              <p className="mb-0 small"><b>REG: </b> $19.99</p>
              <p className="mb-0 small text-primary">
                <span className="font-weight-bold">Save</span> $20.00 (16%)
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="col px-0">
              <button className="btn btn-outline-primary btn-block">
                Add To Cart 
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              </button>
            </div>
            <div className="ml-2">
              <a href="#" className="btn btn-outline-success" data-toggle="tooltip" data-placement="left" title="Add to Wishlist">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import { Link } from "react-router-dom";

export default function Productcard({product}) {

    return  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card-bg card p-3 rounded">
                  <img
                    className="card-img-top mx-auto"
                    src={product.image[0].image}
                    alt="not found"
                  />
                  <div className="card-body d-flex flex-column">
                  
                    <h5 className="card-title">
                      <Link to={"/product/"+product._id}><h2>{product.name}</h2></Link>
                    </h5>
                    <div className="ratings mt-auto">
                      <div className="rating-outer">
                        <div className="rating-inner" style={{width: `${product.rating/10 * 100}%`}}></div>
                      </div>
                    </div>
                    <p className="card-text">RS.{product.price}</p>
                    <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link>
                  </div>
                </div>
              </div>
    
}
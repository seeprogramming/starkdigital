import React from "react";
import { useDispatch } from "react-redux";

import { getProductDetails } from "../store/actions";

const Item = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="col-6 col-md-3 ">
      <div className="single-product m-3">
        <div className="product-image">
          <img src={props.image} alt={props.prName} />
        </div>
        <div className="product-desc">
          <h6>{props.prName}</h6>
          <p>&#8377; {props.prPrice}</p>
          {/* <p>TOTAL : {props.prPrice * count}</p> */}
          <div className="counter-wrap">
            <button
              className="minus btn btn-primary"
              onClick={() => dispatch(getProductDetails(props.prName))}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

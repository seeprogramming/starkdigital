import React from "react";
import {useDispatch} from 'react-redux'
import {removeSelectedProduct} from '../store/actions'

const CartItem = (props) => {
    const dispatch = useDispatch();



  return (
    <div className="col-md-6">
      <div className="card-item-wrap" >
        <img src={props.image} alt={props.prName} />
        <div className="prInfo">
          <h5>{props.prName}</h5>
          <h6>{props.prPrice}</h6>
          <button className="btn btn-danger" onClick={() => dispatch(removeSelectedProduct(props.prName))}>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

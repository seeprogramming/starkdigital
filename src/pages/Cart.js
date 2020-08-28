import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Cart = () => {
  const cartItems = useSelector((state) => state.data.addedProducts);

  const renderedCartItem = cartItems.map((item, key) => {
    return (
      <CartItem
        key={item.product_name}
        image={item.product_image}
        prName={item.product_name}
        prPrice={item.product_price}
      />
    );
  });

  const totalAmount = useSelector((state) => state.data.total);
  const formDetails = useSelector((state) => state.data.formDetails);

  const renderedFormDetails = Object.entries(formDetails).map(
    ([key, value]) => {
      return (
        <tr key={key}>
          <th scope="row">{key.toUpperCase()}</th>
          <td>{value}</td>
        </tr>
      );
    }
  );

  return (
    <Layout>
      <Hero title="YOUR CART" />
      {cartItems.length > 0 ? (
        <React.Fragment>
          <div className="row m-3">{renderedCartItem}</div>
          <div className="row">
          
              <div className="col-md-6">
                <table className="table table-responsive">
                  <tbody>{renderedFormDetails}</tbody>
                </table>
              </div>
              <div className="col-md-6">
                <div className="order-place-wrap">
                  <h3>Total amount to pay - {totalAmount}</h3>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      swal("Thank You", "Product is on your way", "success")
                    }
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            
          </div>
        </React.Fragment>
      ) : (
        <div className="empty-cart">
          <h2 className="empty-cart-text">YOUR CART IS EMPTY !</h2>
          <Link to="/">
            <button className="btn btn-primary">Let's add something :)</button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Cart;

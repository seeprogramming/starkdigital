import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import Item from "../components/Item";
import Hero from "../components/Hero";

import "../css/App.css";
import { Link } from "react-router-dom";

function App() {
  //Fetching all products
  const devices = useSelector((state) => state.data.products);

  const cartProductLength = useSelector(
    (state) => state.data.addedProducts.length
  );

  const renderedDevices = devices.map((device, key) => {
    return (
      <Item
        id={devices.product_name}
        key={device.id}
        prName={device.product_name}
        image={device.product_image}
        prPrice={device.product_price}
      />
    );
  });

  return (
    <div className="App">
      <Layout>
      

        <Hero title="WELCOME TO STARKDIGITAL" />
        <div className="row">{renderedDevices}</div>
        <div className="row">
        <div className="next-btn">
          {cartProductLength > 0 ? (
            <Link to="/order-form">
              <button className="btn btn-warning">NEXT</button>
            </Link>
          ) : null}
        </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;

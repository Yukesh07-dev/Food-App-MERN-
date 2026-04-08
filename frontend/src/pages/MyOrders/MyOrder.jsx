import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } },
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              {/* <p>{order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                        return item.name+" x " + item.quantity
                    }
                    else{
                        return item.name+" x " + item.quantity+ ","
                    }
                })}</p> */}
              {/* <div className="my-orders-items">
                {order.items.map((item, index) => (
                  <p key={index} className="my-orders-item-line">
                    {item.name} x {item.quantity}
                  </p>
                ))}
              </div> */}
<div className="my-orders-items-wrap">
  <div className="my-orders-items-col">
    {order.items.slice(0, 6).map((item, index) => (
      <p key={index} className="my-orders-item-line">
        <span className="item-dot"></span>
        {item.name} x {item.quantity}
      </p>
    ))}
  </div>

  {order.items.length > 6 && (
    <>
      <div className="my-orders-items-divider"></div>
      <div className="my-orders-items-col">
        {order.items.slice(6).map((item, index) => (
          <p key={index} className="my-orders-item-line">
            <span className="item-dot"></span>
            {item.name} x {item.quantity}
          </p>
        ))}
      </div>
    </>
  )}
</div>
              <p>${order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrder;

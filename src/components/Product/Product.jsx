import React from "react";
import "./Product.scss";
import wishlist from "../../assets/svg/wishlist.svg";

import { useDispatch } from "react-redux";
import { addWish } from "../../redux/wishlist/wishlistSlice";

function Product({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="w-product">
      <div className="topw-product">
        <div className="wishlist-about">
          <div className="sale">-40%</div>
          <div onClick={() => dispatch(addWish(data))} className="iconw">
            <img src={wishlist} alt="" />
          </div>
        </div>
        <img className="remotes" src={data.images[0]} alt="" />
      </div>
      <div className="aboutw-product">
        <h1>HAVIT HV-G92 Gamepad</h1>
        <div className="price-w">
          <p className="f-stylew">$120</p>
          <p className="s-stylew">$160</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

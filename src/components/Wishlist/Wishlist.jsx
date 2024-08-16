import React from "react";
import "./wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import deleteS from "../../assets/svg/delete.svg";
import { removeWish } from "../../redux/wishlist/wishlistSlice";

function Wishlist() {
  const wishProduct = useSelector((state) => state.wishlist.wish);
  const dispatch = useDispatch();
  return (
    <>
      <section className="wishlist-product">
        {wishProduct.map((item) => (
          <div key={item.id} className="w-product">
            <div className="topw-product">
              <div className="wishlist-about">
                <div className="sale">-40%</div>
                <div className="iconw">
                  <img
                    onClick={() => dispatch(removeWish(item.id))}
                    src={deleteS}
                    alt=""
                  />
                </div>
              </div>
              <img className="remotes" src={item.images[0]} alt="" />
              <button>Add to card</button>
            </div>
            <div className="aboutw-product">
              <h1>{item.title}</h1>
              <div className="price-w">
                <p className="f-stylew">${item.price}</p>
                <p className="s-stylew">$160</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="flash-salew">
        <div className="todayw">
          <div className="cubew"></div>
          <p>Just For You</p>
        </div>
      </div>
      <section className="wishlist-product">
        <div className="w-product">
          <div className="topw-product">
            <div className="wishlist-about">
              <div className="sale">-40%</div>
              <div className="iconw">
                <img src="" alt="" />
              </div>
            </div>
            <img className="remotes" src="" alt="" />
            <button>Add to card</button>
          </div>
          <div className="aboutw-product">
            <h1>HAVIT HV-G92 Gamepad</h1>
            <div className="price-w">
              <p className="f-stylew">$120</p>
              <p className="s-stylew">$160</p>
            </div>
            <div className="grade-w">
              {/* <img src={star} alt="" /> */}
              <p>(88)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wishlist;

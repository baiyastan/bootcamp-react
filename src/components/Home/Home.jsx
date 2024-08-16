import React, { useState, useEffect } from "react";
import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";
import mainImage from "../../assets/image/main-image.png";
import Product from "../Product/Product";

import apiClient from "../../axios/apiClient";

function Home() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  async function getCategory() {
    try {
      const res = await apiClient.get("/api/v1/categories");
      console.log(res);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const res = await apiClient.get("/api/v1/products");
      console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  return (
    <div>
      <section className="home container">
        <div className="home-sidebar">
          <ul>
            {category.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="home-carousel">
          <Carousel>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <img src={mainImage} alt="" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <img src={mainImage} alt="" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <img src={mainImage} alt="" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <div className="products">
        {products.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

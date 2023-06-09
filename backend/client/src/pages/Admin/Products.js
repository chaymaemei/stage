import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
            <div className="container-fluid m-3 p-3">
      <div className="row home-page">

        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
        <h2 >All Products</h2>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-price">{p.price}</p>
                    </div>
                    <p className="card-text">{p.description}</p>
                    <button className="btn btn-dark">View Details</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div></div>
    </Layout>
  );
};

export default Products;

import React from "react";
import { useState, useEffect } from "react";
import productService from "../../Service/product.service";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg(""); // Clear the message after 5 seconds
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [msg]); // Run this effect whenever `msg` changes

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
    // console.log(product);
  };

  const ProductRegister = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then(() => {
        setMsg("Product Added Successfully");
        setProduct({
          name: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    console.log(product);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          {msg && <div className="mt-4 alert alert-success">{msg}</div>}
          <div className="card bg-dark text-white">
            <div className="card-header text-center h3 ">Add Product</div>
            <div className="card-body ">
              <form onSubmit={(e) => ProductRegister(e)}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Enter Product Name :
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="name"
                    placeholder="Eg- Iphone 13"
                    required
                    value={product.name}
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Enter Product Description :
                  </label>
                  <input
                    type="text"
                    value={product.description}
                    name="description"
                    placeholder="Eg- FlagShip"
                    required
                    id="productDescription"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Enter Product Price
                  </label>
                  <input
                    type="text"
                    value={product.price}
                    id="productPrice"
                    placeholder="Eg- 70000"
                    required
                    name="price"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productStatus" className="form-label">
                    Enter Product Status
                  </label>
                  <input
                    type="text"
                    id="productStatus"
                    name="status"
                    placeholder="Eg- Available"
                    required
                    value={product.status}
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary col-md-12">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

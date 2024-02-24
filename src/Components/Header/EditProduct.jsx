import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../../Service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    status: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (id) {
      productService
        .getProductById(id)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then(() => {
        setMsg("Product Updated Successfully");
        setTimeout(() => {
          navigate("/ViewProduct");
        }, 3000);
      })
      .catch((err) => {
        alert(
          "No product Available with this Id. Go to Prodcuts page to edit the product"
        );
        navigate("/ViewProduct");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          {msg && <div className="mt-4 alert alert-success">{msg}</div>}
          <div className="card bg-dark text-white">
            <div className="card-header text-center h3">Edit Product</div>
            <div className="card-body ">
              <form onSubmit={ProductUpdate}>
                <div className="mb-3">
                  <label htmlFor="productId" className="form-label">
                    Product Id:
                  </label>
                  <input
                    type="text"
                    value={product.id}
                    id="productId"
                    name="id"
                    required
                    readOnly={!!id}
                    disabled={!!id}
                    className={`form-control ${product.id && "is-valid"}`}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Enter Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="name"
                    required
                    value={product.name}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Enter Product Description
                  </label>
                  <input
                    type="text"
                    required
                    value={product.description}
                    name="description"
                    id="productDescription"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Enter Product Price
                  </label>
                  <input
                    type="text"
                    required
                    value={product.price}
                    id="productPrice"
                    name="price"
                    className="form-control"
                    onChange={handleChange}
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
                    required
                    value={product.status}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary col-md-12">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

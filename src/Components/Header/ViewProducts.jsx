import React, { useEffect, useState } from "react";
import productService from "../../Service/product.service";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ViewProducts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Fetch all products or filter based on the search query
    productService
      .getAllProducts()
      .then((res) => {
        let filteredProducts = res.data;
        if (searchQuery) {
          filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setProductList(filteredProducts);
        } else if (!searchQuery) {
          setProductList(res.data);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [searchQuery]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteProduct = (id) => {
    // console.log(id);
    productService
      .deleteProduct(id)
      .then(() => {
        alert("Deleted product successfully");
        init();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container view__container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card bg-dark">
              <div className="card-header text-center">
                <h4 className="text-white">Products</h4>
              </div>
              <div className="card-body bg-dark px-5 ">
                <div className="row">
                  <div className="table-responsive">
                    <table className="table table-hover table-dark">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider mt-5 ">
                        {productList.map((p, num) => (
                          <tr key={p.id} className="mt-5">
                            <td>{num + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                            <td>{p.status}</td>
                            <td className=" d-flex ">
                              <Link
                                to={`/editProduct/` + p.id}
                                className="btn btn-primary"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={() => deleteProduct(p.id)}
                                className="btn btn-danger btn-xs ms-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProducts;

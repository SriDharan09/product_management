import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

  const clearInput = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  useEffect(() => {
    const handleSearch = () => {
      navigate(`/ViewProduct?search=${searchQuery}`);
    };

    // Trigger the search when searchQuery changes
    if (searchQuery !== "") {
      handleSearch();
    } else if (searchQuery === "") {
      navigate(location.pathname);
    }
  }, [searchQuery, navigate, location.pathname]);

  useEffect(() => {
    // Clear the search query when the route changes
    setSearchQuery("");
    navigate(location.pathname);
  }, [navigate, location.pathname]); // Listen for changes in the pathname

  const handleInputChange = (e) => {
    // Trim whitespace from the input value
    const trimmedValue = e.target.value;

    // If the trimmed value is empty, set the search query to an empty string
    if (trimmedValue === "") {
      setSearchQuery("");
    } else {
      setSearchQuery(trimmedValue);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Product Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/ViewProduct"}
              >
                Products
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage
              </Link>
              <ul className="dropdown-menu bg-dark text-white navbar-dark">
                <li>
                  <Link
                    to={"/addProduct"}
                    className="dropdown-item text-white bg-dark"
                  >
                    Add products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/editProduct"}
                    className="dropdown-item text-white bg-dark"
                  >
                    Edit Product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-success"
              onClick={(e) => clearInput(e)}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

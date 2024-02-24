import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home d-flex  text-center text-dark">
      <div className="cover-container overlay d-flex  p-5 mx-auto flex-column">
        <main className="px-3 text-white">
          <h1>Welcome to Product Management</h1>
          <p className="lead text-white">
            This is a simple product management application.
            <br />
            You can add, edit and delete products.
            <br />
            You can also search products.
            <br />
          </p>
          <p className="lead">
            <Link
              to={"/ViewProduct"}
              className="btn btn-lg btn-secondary fw-bold border-white bg-black"
            >
              Products
            </Link>
          </p>
        </main>
      </div>
    </section>
  );
};

export default Home;

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import AddProduct from "./Components/Header/AddProduct";

import EditProduct from "./Components/Header/EditProduct";

import Home from "./Components/Header/Home";

import { Route, Routes } from "react-router-dom";
import ViewProducts from "./Components/Header/ViewProducts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/editProduct/" element={<EditProduct />} />

          <Route path="/ViewProduct" element={<ViewProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

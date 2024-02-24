import axios from "axios";
const API_URL = "http://localhost:8080";

class ProductService {
  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }

  getAllProducts() {
    return axios.get(API_URL + "/");
  }

  getProductById(id) {
    return axios.get(API_URL + "/" + id);
  }
  getProductByName(name) {
    return axios.get(API_URL + "/getProduct/" + name);
  }

  deleteProduct(id) {
    return axios.get(API_URL + "/deleteProduct/" + id);
  }

  editProduct(product) {
    return axios.post(API_URL + "/editProduct/" + product.id, product);
  }
}

// eslint-disable-next-line
export default new ProductService();

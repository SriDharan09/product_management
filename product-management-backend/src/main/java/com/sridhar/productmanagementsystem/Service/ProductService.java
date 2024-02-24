package com.sridhar.productmanagementsystem.Service;

import com.sridhar.productmanagementsystem.Model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface ProductService {

//    save product information into the database
    public Product saveProduct(Product product);

//    Get All Product to listed using LIST method
    public List<Product> getAllProducts();

//    Fetch Product from the database using id
    public Product getProductById(Integer id);

//    Fetch Product from the database using name
    public Product getProductByName(String name);

//    Delete Product from the database using id
    public String deleteProductById(Integer id);

    public Product editProductById(Product product,Integer id);

    Product saveProduct(String name, String description, Double price, String status, MultipartFile imageFile);
}

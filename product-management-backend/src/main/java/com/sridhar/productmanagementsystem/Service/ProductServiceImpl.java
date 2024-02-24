package com.sridhar.productmanagementsystem.Service;

import com.sridhar.productmanagementsystem.Model.Product;
import com.sridhar.productmanagementsystem.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {

        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product getProductByName(String name) {
        return productRepository.getProductByName(name);
    }

    @Override
    public String deleteProductById(Integer id) {
        productRepository.deleteById(id);
        return "Product deleted successfully";

//        Product product = productRepository.findById(id).get();
//
//        if(product != null) {
//            productRepository.delete(product);
//        }
    }

    @Override
    public Product editProductById(Product product,Integer id) {
        Product oldproduct = productRepository.findById(id).get();
        oldproduct.setName(product.getName());
        oldproduct.setDescription(product.getDescription());
        oldproduct.setPrice(product.getPrice());
        oldproduct.setStatus(product.getStatus());

        return productRepository.save(oldproduct);
    }

    @Override
    public Product saveProduct(String name, String description, Double price, String status, MultipartFile imageFile)  {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setStatus(status);
        try {
            product.setImageData(imageFile.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return productRepository.save(product);
    }
}

package com.sridhar.productmanagementsystem.Controller;
import com.sridhar.productmanagementsystem.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sridhar.productmanagementsystem.Model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class controller {

    @Autowired
    private ProductService productService;


    @PostMapping("/saveProduct")
    public ResponseEntity<?> uploadProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }


    @GetMapping("/")
    public ResponseEntity<?> getAllProduct(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id){
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }
    @GetMapping("/getProduct/{name}")
    public ResponseEntity<?> getProductByName(@PathVariable String name){
        return new ResponseEntity<>(productService.getProductByName(name), HttpStatus.OK);
    }

    @GetMapping  ("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id){
        return new ResponseEntity<>(productService.deleteProductById(id), HttpStatus.OK);
    }


    @PostMapping("/editProduct/{id}")
    public ResponseEntity<?> editProduct(@RequestBody  Product product, @PathVariable Integer id){
        return new ResponseEntity<>(productService.editProductById(product, id), HttpStatus.CREATED);
    }

}

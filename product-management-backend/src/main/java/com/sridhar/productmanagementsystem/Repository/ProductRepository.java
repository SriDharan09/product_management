package com.sridhar.productmanagementsystem.Repository;

import com.sridhar.productmanagementsystem.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {


    Product getProductByName(String name);
}

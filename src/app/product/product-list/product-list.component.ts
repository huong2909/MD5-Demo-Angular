import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductServiceService} from '../../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductServiceService) { }
  public getProducts() {
    this.products = this.productService.getProduct();
  }
  ngOnInit() {
    this.getProducts();
  }

}

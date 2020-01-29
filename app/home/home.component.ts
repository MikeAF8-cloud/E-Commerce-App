import { ActivatedRoute } from '@angular/router';
import { FormDataService } from './../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private products: Array<any>;
  private errors: any;
  private categoryType: string;

  constructor(private user: AuthUserService, private product: ProductService, private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit() {
    this.product.getProducts('true', 'true')
    .subscribe(
      res => {
        this.errors = null;
        this.products = res.products;
      }, err => {
        console.log(err);
        this.errors = err;
      });

    this.route.queryParamMap.subscribe(params => {
      if (params.get('category')) {
        this.categoryType = params.get('category');
      } else {
        this.categoryType = '';
      }
    });
  }

  filterByCategory() {
    return this.products.filter(prod => {
      return this.categoryType === '' ? true : prod.category === this.categoryType;
    });
  }
}

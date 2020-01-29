import { ProductService } from './../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormDataService } from './../../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories: any;
  errors: any;
  productId: any;

  regexPrice: any = /(\d+\.\d{2,2})/;
  regexImageUrl: any = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))(\?.*)?/;

  constructor(private fb: FormBuilder, private product: ProductService,
              private router: Router, private route: ActivatedRoute,
              private dp: DecimalPipe) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(this.regexPrice)]],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern(this.regexImageUrl)]]
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get category() {
    return this.productForm.get('category');
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  ngOnInit() {
    this.categories = FormDataService.getCategories();

    if (this.productId) {
      this.product.productInfo(this.productId)
      .subscribe(res => {
        this.productForm.controls.title.setValue(res.title);
        this.productForm.controls.price.setValue(this.dp.transform(res.price, '1.2-2'));
        this.productForm.controls.category.setValue(res.category);
        this.productForm.controls.imageUrl.setValue(res.imageUrl);
      });
    }
  }

  onSubmit() {
    this.productForm.markAsUntouched();

    let req = null;
    if (this.productId) {
      req = this.product.updateProduct(this.productForm.value, this.productId);
    } else {
      req = this.product.saveProduct(this.productForm.value);
    }

    return req
    .subscribe(
      res => {
        this.errors = null;
        this.router.navigate(['/admin/products']);
      },
      err => {
        this.productForm.markAsUntouched();
        this.errors = err.error;
      }
    );
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      return this.product.deleteProduct(this.productId)
      .subscribe(
        res => {
          this.errors = null;
          this.router.navigate(['/admin/products']);
        },
        err => {
          console.log(err);
          this.errors = err.error;
        });
    }
  }
}

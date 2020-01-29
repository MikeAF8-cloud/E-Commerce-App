import { FormDataService } from './../../services/form-data.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight,
          faAngleLeft, faAngleRight,
          faAngleDown, faAngleUp,
          IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  private products: Array<any>;
  private itemLimit: number;
  private pageCounter: number;

  private sortCategory: string;
  private titleClick: boolean;
  private idClick: boolean;
  private priceClick: boolean;

  private angleDoubleLeft: IconDefinition;
  private angleDoubleRight: IconDefinition;
  private angleLeft: IconDefinition;
  private angleRight: IconDefinition;
  private angleDown: IconDefinition;
  private angleUp: IconDefinition;

  constructor(private product: ProductService) {
    this.products = [];

    this.pageCounter = 1;
    this.itemLimit = 10;

    this.sortCategory = 'id';
    this.idClick = true;
    this.titleClick = false;
    this.priceClick = false;

    this.angleDown = faAngleDown;
    this.angleUp = faAngleUp;
    this.angleDoubleLeft = faAngleDoubleLeft;
    this.angleDoubleRight = faAngleDoubleRight;
    this.angleLeft = faAngleLeft;
    this.angleRight = faAngleRight;
  }

  ngOnInit() {
    this.product.getProducts('false', 'false')
    .subscribe(
      res => {
        if (res.imageFlag) {
          for (const prod of res.products) {
            prod.image = FormDataService.stringToBlob(prod.image);
          }
        }

        this.products = res.products;
        if (this.products.length < 10) {
          this.itemLimit = this.products.length;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  sortProducts(type: string) {
    this.sortCategory = type;
    switch (type) {
      case 'id':
        this.idClick = !this.idClick;
        this.titleClick = false;
        this.priceClick = false;
        if (this.idClick) {
          this.products.sort((a, b) => a.id - b.id);
        } else {
          this.products.sort((a, b) => b.id - a.id);
        }
        break;
      case 'title':
        this.titleClick = !this.titleClick;
        this.idClick = false;
        this.priceClick = false;
        if (this.titleClick) {
          this.products.sort((a, b) => (a.title > b.title) ? 1 : -1);
        } else {
          this.products.sort((a, b) => (b.title > a.title) ? 1 : -1);
        }
        break;
      case 'price':
        this.priceClick = !this.priceClick;
        this.idClick = false;
        this.titleClick = false;
        if (this.priceClick) {
          this.products.sort((a, b) => a.price - b.price);
        } else {
          this.products.sort((a, b) => b.price - a.price);
        }
        break;
      default:
        break;
    }
  }

  filterList(query: string) {
    return this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
  }

  pageChangeOne(num: number) {
    this.pageCounter = this.pageCounter + num;
  }

  pageBegin() {
    this.pageCounter = 1;
  }

  getMaxPages(query: string) {
    return Math.ceil(this.filterList(query).length / this.itemLimit);
  }

  pageEnd(query: string) {
    this.pageCounter = this.getMaxPages(query);
  }

  listEnd(query: string) {
    if (this.filterList(query).length > this.pageCounter * this.itemLimit) {
      return true;
    } else {
      return false;
    }
  }

  newItemLimit(value: number, query: string) {
    this.itemLimit = value;
    if (this.pageCounter * this.itemLimit >= this.products.length) {
      this.pageCounter = this.getMaxPages(query);
    }
  }

}

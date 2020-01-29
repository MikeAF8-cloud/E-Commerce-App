import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  private categories: Array<any>;
  @Input() category: string;

  constructor() {
    this.categories = FormDataService.getCategories();
  }

  ngOnInit() {
  }

}

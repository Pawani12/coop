import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prdouct-list',
  templateUrl: './prdouct-list.component.html',
  styleUrls: ['./prdouct-list.component.css']
})
export class PrdouctListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'productName', 'productDescription', 'manufactureDate', 'action'];
  dataSource;

  constructor(private ProductsService:ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){

    this.ProductsService.getProducts().subscribe((data: any) => {
      this.dataSource = data.object;
    });
  }
  onUpdateClick(id) {

    this.ProductsService.getProducts().subscribe((data: any) => {
      this.dataSource = data.object;
      this.getProducts();
    });
  }
 
}


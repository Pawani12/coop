import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private sub: Subscription;
  public ProductGroup :FormGroup
  constructor(private fb: FormBuilder,
            private productservice: ProductsService,
            private _route: ActivatedRoute,
            private _router: Router) { }

  ngOnInit() {
    this.setForm();
      this.sub = this._route.paramMap.subscribe(
        params => {
          const id = +params.get('id');
  
          if (id) {
            this.getProductById(id);
            //this.updateClick = true;
          } else {
            //this.saveClick = true;
          }
        }
      );
  }
  setForm() {
    this.ProductGroup = this.fb.group({
      
      nameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')])],
      desCtrl: [null, Validators.required],
      idctrl :[null],
      dateCtrl :[null],
      })
    

  }
  save() { 
    let name = this.ProductGroup.controls['nameCtrl'].value; 
    let description = this.ProductGroup.controls['desCtrl'].value;
    let mDate = this.ProductGroup.controls['dateCtrl'].value;
    
    


    const productObject = {
      'name' : name,
      'description' : description,
      'manufactureDate' : mDate,
      

    }
    this.productservice.saveProduct(productObject).subscribe((data: any) => {

    });
    alert("Data Added");
  }
  getProductById(id): void {
    
    this.productservice.getProductById(id).subscribe((data: any) => {
      //this.StudentGroup = data;
      this.ProductGroup.controls.idCtrl.setValue(data.id);
      this.ProductGroup.controls.nameCtrl.setValue(data.name);
      this.ProductGroup.controls.desCtrl.setValue(data.description);
      this.ProductGroup.controls.dateCtrl.setValue(data.manufactureDate);
      
  
      
    })
  }
  UpdateProduct(){

    let pId = this.ProductGroup.controls['idctrl'].value; 
    let pName = this.ProductGroup.controls['nameCtrl'].value; 
    let Pdescription = this.ProductGroup.controls['desCtrl'].value;
    let pDate = this.ProductGroup.controls['dateCtrl'].value;
  
    const newProduct = {
      id :pId,
      name : pName,
      description : Pdescription,
      manufactureDate:pDate
    }
    this.productservice.updateProduct(newProduct).subscribe((data: any) => {

    });
  }

  


}

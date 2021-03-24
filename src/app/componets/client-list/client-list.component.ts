import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientservicesService } from 'src/app/services/clientservices.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public clientForm :FormGroup;
  clientlist;

  public isGender: number = 0;

  constructor(private fb:FormBuilder ,
    private clientservice : ClientservicesService) { }

  ngOnInit() {
    this.getClients();
    this.setForm();
  }
  getClients(){

    this.clientservice.getClients().subscribe((data: any) => {
      this.clientlist = data.object;
    });
  }
  setForm(){
    this.clientForm = this.fb.group({
      clientIdCtrl:[null],
      firstNameCtrl:[null,Validators.required],
      lastNameCtrl:[null,Validators.required],
      emailCtrl:[null,Validators.required],
      numberCtrl:[null,Validators.required],
      passwordCtrl:[null,Validators.required],
      conPasswordCtrl:[null,Validators.required],
      genderCtrl:[null,Validators.required],
      countryCtrl:[null,Validators.required]
    })
  }
  getOpen(id){
    this.clientservice.getClientsById(id).subscribe((data: any) => {
      
      this.clientForm.controls.clientIdCtrl.setValue(data.clientId);
      this.clientForm.controls.firstNameCtrl.setValue(data.firstName);
      this.clientForm.controls.lastNameCtrl.setValue(data.lastName);
      this.clientForm.controls.emailCtrl.setValue(data.email);
      this.clientForm.controls.numberCtrl.setValue(data.phoneNumber);
      this.clientForm.controls.passwordCtrl.setValue(data.password);
      // const currentDate = new Date(data.dob);
      this.clientForm.controls.conPasswordCtrl.setValue(data.confirmPassword);
      /**setting the values for the radio button */
      
      if (data.gender == 0) {
        this.isGender = 0;
      }
      if (data.gender == 1) {
        this.isGender = 1;
      }

     
      this.clientForm.controls.countryCtrl.setValue(data.country);
     
     
      
    })
  }
  onDeleteClick(clientId) {

      this.clientservice.deleteClient(clientId).subscribe((data: any) => {
        this.clientlist();
});
  

  }
  onUpdateClick(clientId){

      this.clientservice.getClients().subscribe((data: any) => {
      this.clientlist = data.object;
      this.getClients();
});
}

}

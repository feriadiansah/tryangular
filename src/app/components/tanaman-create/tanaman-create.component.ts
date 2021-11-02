import { Component, OnInit } from '@angular/core';
import { TanamanService } from '../../services/tanaman/tanaman.service';
import { FormBuilder, FormGroup  } from '@angular/forms';

import { Router } from "@angular/router";


@Component({
  selector: 'tanaman-create',
  templateUrl: './tanaman-create.component.html',
  styleUrls: ['./tanaman-create.component.css']
})
export class TanamanCreateComponent implements OnInit {

  public tanamanForm: FormGroup;

  constructor(
    public tanamanService: TanamanService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.tanamanForm = this.formBuilder.group({
      nama: [''],
      nomorhp: [''],
      alamat: [''],
      jenistanaman: [''],
      modelpot: [''],
    })      
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.tanamanService.createTanaman(this.tanamanForm.value);
    this.router.navigate(['LIST-TANAMAN']); 
   };
}
 
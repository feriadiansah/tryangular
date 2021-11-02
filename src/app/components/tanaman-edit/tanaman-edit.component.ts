import { Component, OnInit } from '@angular/core';
import { TanamanService } from '../../services/tanaman/tanaman.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'tanaman-edit',
  templateUrl: './tanaman-edit.component.html',
  styleUrls: ['./tanaman-edit.component.css']
})
export class TanamanEditComponent implements OnInit {

  public editForm: FormGroup;
  tanamanRef: any

  constructor(
    public TanamanService: TanamanService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    console.log("id");
    this.editForm = this.formBuilder.group({
      nama: [''],
      alamat: [''],
      nomorhp: [''],
      jenistanaman: [''],
      modelpot: [''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    console.log(id);

    this.TanamanService.getTanamanDoc(id).subscribe(res => {
      this.tanamanRef = res;
      this.editForm = this.formBuilder.group({
        nama: [this.tanamanRef.nama],
        alamat: [this.tanamanRef.alamat],
        nomorhp: [this.tanamanRef.nomorhp],
        jenistanaman: [this.tanamanRef.jenistanaman],
        modelpot: [this.tanamanRef.modelpot]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.TanamanService.updateTanaman(this.editForm.value, id);
    this.router.navigate(['LIST-TANAMAN']);
  };

}

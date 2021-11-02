import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  
  public editForm: FormGroup;
  userRef: any

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    console.log("id");
    this.editForm = this.formBuilder.group({
      nis: [''],
      nama: [''],
      email: [''],
      kontak: [''],
      warganegara: [''],
      agama: [''],
      alamat: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    console.log(id);

    this.userService.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        nis: [this.userRef.nis],
        nama: [this.userRef.nama],
        email: [this.userRef.email],
        kontak: [this.userRef.kontak],
        warganegara: [this.userRef.warganegara],
        agama: [this.userRef.agama],
        alamat: [this.userRef.alamat]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['list-users']);
  };

}

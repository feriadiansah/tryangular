import { Component, OnInit } from '@angular/core';
import { TanamanService } from '../../services/tanaman/tanaman.service';
import { Tanaman } from '../../services/tanaman/tanaman.model';


@Component({
  selector: 'tanaman-list',
  templateUrl: './tanaman-list.component.html',
  styleUrls: ['./tanaman-list.component.css']
})
export class TanamanListComponent implements OnInit {

  Tanaman: Tanaman[];

  constructor(private tanamanService: TanamanService) { }

  ngOnInit() {
    this.tanamanService.getTanamanList().subscribe(res => {
      this.Tanaman = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Tanaman
        };
      })
    });
  }

  removeTanaman = tanaman => this.tanamanService.deleteTanaman(tanaman);
}


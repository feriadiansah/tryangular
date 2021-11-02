import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tanaman } from './tanaman.model';


@Injectable({
  providedIn: 'root'
})
export class TanamanService {

  constructor(private angularFirestore: AngularFirestore) { }
  getTanamanDoc(id) {
    return this.angularFirestore
    .collection('tanaman')
    .doc(id)
    .valueChanges()
}
getTanamanList() { 
  return this.angularFirestore
  .collection("tanaman")
  .snapshotChanges();
 }
 createTanaman(Tanaman: Tanaman) {
  return new Promise<any>((resolve, reject) =>{
    this.angularFirestore
      .collection("tanaman")
      .add(Tanaman)
      .then(response => { console.log(response) }, error => reject(error));
  });
}

deleteTanaman(Tanaman) {
  return this.angularFirestore
    .collection("tanaman")
    .doc(Tanaman.id)
    .delete();
}

updateTanaman(tanaman: Tanaman, id) {
  return this.angularFirestore
    .collection("tanaman")
    .doc(id)
    .update({
      nama: tanaman.nama,
      alamat: tanaman.alamat,
      nomorhp: tanaman.nomorhp,
      jenistanaman: tanaman.jenistanaman,
      modelpot: tanaman.modelpot
    });
}
}

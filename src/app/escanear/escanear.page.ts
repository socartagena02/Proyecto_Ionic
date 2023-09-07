import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {
  imagenUrl: string = '/assets/QR/rendir.PNG';


  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/alumnos']);
  }


}

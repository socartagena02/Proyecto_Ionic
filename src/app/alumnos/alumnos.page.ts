import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  escanearQR(){
    this.router.navigate(['/escanear']);
  }
  volver(){
    this.router.navigate(['/login']);
  }
}

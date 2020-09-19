import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { Provincia } from './../../../modelos/provincia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-crear-provincia',
  templateUrl: './ruta-crear-provincia.component.html',
  styleUrls: ['./ruta-crear-provincia.component.css']
})
export class RutaCrearProvinciaComponent implements OnInit {

  nuevaProvincia: Provincia;

  constructor(
    private readonly _provinciaService: ProvinciaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearProvincia(formulario: NgForm) {
    this.nuevaProvincia = formulario.form.value;
    const observableCrearProvincia = this._provinciaService.createProvincia(this.nuevaProvincia);
    observableCrearProvincia
      .subscribe(
        () => {
          console.log('Provincia registrada: ', this.nuevaProvincia);
          const ruta = ['/refugios', 'lista-provincias'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando provincia', error);
        }
      );
  }
}

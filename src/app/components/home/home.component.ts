import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  forma!: FormGroup;

  forma2!: FormGroup;

  constructor( private fb: FormBuilder, private fb2: FormBuilder ) {

  this.crearFormulario();

  this.crearFormularioSusc();

  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre  : ['', [ Validators.required ] ],
      email   : ['', [ Validators.required, Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' ) ] ],
      celular : ['', [ Validators.required, Validators.min(1999999999), Validators.max(9999999999), Validators.pattern( '[0-9]*' ) ] ],
      asunto  : ['', [ Validators.required ] ],
      mensaje : ['', [ Validators.required ] ]
    })
  }
  
  crearFormularioSusc(){
    this.forma2 = this.fb2.group({
      emailSusc : ['', [ Validators.required, Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' ) ] ]
    })
  }

  guardar(){
    /*console.log( this.forma );
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAllAsTouched();
      })
    }*/
  }

  getNoValido( input:string ){
    return this.forma.get(input)!.invalid && this.forma.get(input)!.touched
  }

  getValido( input:string ){
    return this.forma.get(input)!.valid && this.forma.get(input)!.touched
  }

  getNoValido2( input:string ){
    return this.forma2.get(input)!.invalid && this.forma2.get(input)!.touched
  }

  getValido2( input:string ){
    return this.forma2.get(input)!.valid && this.forma2.get(input)!.touched
  }

}

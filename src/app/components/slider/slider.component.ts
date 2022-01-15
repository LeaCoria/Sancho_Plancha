import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [
  ]
})
export class SliderComponent implements OnInit {

  imagenes:any[]=[
    {
      img: "../assets/img/hamburguesas.jpg",
      titulo: "Bienvenido a Sancho Plancha Online!",
      desc: "Presioná el botón de WhatsApp y hacenos tu pedido!"
    },
    {
      img: "../assets/img/mercadopago.jpg",
      titulo: "Aceptamos efectivo, transferencias y Mercado Pago",
      desc: "Gracias por ingresar a nuestra página web"
    },
    {
      img: "../assets/img/hamburguesa-manos.jpeg",
      titulo: "Trabajamos de Lunes a Lunes de 12:00hs a 15:00hs y de 18:00hs a 1:00hs",
      desc: "Bienvenido a Sancho Plancha, no dudes en realizar tu consulta"
    }
  ];

  constructor( private _confing:NgbCarouselConfig ) {
    _confing.interval = 5000;
    _confing.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}

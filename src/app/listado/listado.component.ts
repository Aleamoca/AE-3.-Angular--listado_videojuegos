import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../videojuego.model';
import { VideojuegoService } from '../videojuego.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  videojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService){ }

  ngOnInit(): void {
    this.videojuegos = this.videojuegoService.getVideojuegos()
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../videojuego.model';
import { VideojuegoService } from '../videojuego.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  videojuego: Videojuego | undefined;

  constructor(
    private route: ActivatedRoute,
    private videojuegoService: VideojuegoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.videojuego = this.videojuegoService.getVideojuego(id);
  }

}

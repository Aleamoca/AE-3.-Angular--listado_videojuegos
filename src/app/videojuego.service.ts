import { Injectable } from '@angular/core';
import { Videojuego } from './videojuego.model';

@Injectable({
  providedIn: 'root',
})
export class VideojuegoService {
  private videojuegos: Videojuego[] = [
    {id: 1,
      titulo: 'The Legend of Zelda: Breath of the Wild',
      compania: 'Nintendo',
      imagen: 'src/assets/img/Zelda.png',//meter imagen
      valoracion: 5,
    },
    {
      id: 2,
      titulo: 'Red Dead Redemption 2',
      compania: 'Rockstar Games',
      imagen: 'src/assets/img/RedDeadRedemption.png',
      valoracion: 4.5,
    },
    {
      id: 3,
      titulo: 'Cyberpunk 2077',
      compania: 'CD Projekt',
      imagen: 'src/assets/img/Cyberpunk2077.png',
      valoracion: 3.5,
    },
    {
      id: 4,
      titulo: 'Super Mario Odyssey',
      compania: 'Nintendo',
      imagen: 'src/assets/img/SMOdyssey.png',
      valoracion: 4.7,
    },
    {
      id: 5,
      titulo: 'The Witcher 3: Wild Hunt',
      compania: 'CD Projekt',
      imagen: 'src/assets/images/witcher3.png',
      valoracion: 4.8,
    },
    
  ];

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(id: number): Videojuego | undefined {
    return this.videojuegos.find((v) => v.id === id);
  }

  constructor() { }
}



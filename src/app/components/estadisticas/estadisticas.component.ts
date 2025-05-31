import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosDataService } from '../../services/juegos-data.service';
import { Juego } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements OnInit{
  totalJuegos = 0;
  juegosGratuitos = 0;
  juegosDePago = 0;
  mejorJuego!: Juego;
  promedioPrecio = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe(juegos => {
      this.totalJuegos = juegos.length;

      this.juegosGratuitos = juegos.filter(j => j.precio === 0).length;
      this.juegosDePago = juegos.filter(j => j.precio > 0).length;

      this.mejorJuego = juegos.reduce((a, b) => a.rating > b.rating ? a : b);

      const precios = juegos.filter(j => j.precio > 0).map(j => j.precio);
      this.promedioPrecio = precios.reduce((a, b) => a + b, 0) / precios.length;
    });
  }
}


/*
Respuestas PARTE 4.1:
1. ¿En que archivo se define la interfaz Juego?
Respuesta:En el archivo juegos.json



2. ¿Qué archivo maneja el estado global de los filtros?
Respuesta:Es manejado por un servicio

3.¿Donde se configura el HttpClient para la aplicación?
Respuesta:En el archivo app.config.ts

*/

/*
Respuestas PARTE 4.2:
1. ¿Por qué este proyecto NO tiene app.module.ts?
Respuesta:Porque está utilizando la nueva standalone

2.¿Que ventaja tiene usar BehaviorSubject en el servicio de juegos?
Respuesta:Permite mantener los filtros y listas de juegos 
a todos los componentes.

*/





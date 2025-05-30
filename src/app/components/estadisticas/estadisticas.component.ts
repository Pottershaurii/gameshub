import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  
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





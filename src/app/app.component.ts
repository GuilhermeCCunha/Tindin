import { Component } from '@angular/core';
import { GamesService } from './games.service';
import{Game} from './GamesInterfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tindin';
// Exibe lista de jogos da API no console do navegador
   games: Game []= [];

   constructor (gamesService: GamesService) {

        gamesService
        .listFromGames()
        .subscribe(games => {

          console.log("Lista de games da API",games);
          this.games = games
        
        });
     
          
   

   }
/*
// Exibe lista de jogos da API no console do navegador
games: any[]= [];

constructor (http:HttpClient) {
  
          http
          .get<any[]>('https://api-labs.tindin.com.br/games')
          .subscribe(games => {
           console.log(games);
           this.games = games});
 

}

*/
 

   //        https://api-labs.tindin.com.br/games




}


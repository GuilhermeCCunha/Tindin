import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import{Game,RootObject } from './GamesInterfaces';

const API =  'https://api-labs.tindin.com.br/games';
@Injectable({providedIn: 'root'})
export class GamesService{

    constructor(public http: HttpClient){}

    listFromGames(){
        return this.http
        .get<Game[]>(API);
    }

}
import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable} from "rxjs/Observable";
import {MessageService} from "../messages/message.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeroService {

  heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return this.http.get<Hero>(this.heroesUrl + `/${id}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';

export interface Hero {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  // styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    /*EL ngOnInit se hace cuando la pagina esta
    Ya toda renderizada. El constructor se ejecuta
    Mucho antes*/
    // tslint:disable-next-line: no-trailing-whitespace
    this.heros = this.heroService.getHeros();
    console.log(this.heros);
  }

}

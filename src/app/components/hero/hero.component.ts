import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/heroes.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};
  constructor(private activatedRoute: ActivatedRoute, private herosService: HeroService) {
    this.activatedRoute.params.subscribe(parametros => {
      this.hero = this.herosService.getHero(parametros.id);
      console.log(this.hero);
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: string[] = [
    'Ce qui va assister demain au communication optique doit importer le cours que Madame a envoyé ou il ne sera pas accepter',
  'Bonjour à tous, La séance de transmission satellitaire et mobile est confirmé aujourdhui à 13h45 à la salle I106.',
  'Le cours du programmation web à 14:30 aujourdhui',
  ' Rattrapage cisco le 1er semaine de février'
   ];
  new = '';
  constructor() { }

  ngOnInit() {
  }

}

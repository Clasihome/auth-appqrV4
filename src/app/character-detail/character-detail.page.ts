// src/app/character-detail/character-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickymortyService } from '../services/rickymorty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private rickymortyService: RickymortyService
  ) { }

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    this.rickymortyService.getPersonajeById(Number(characterId)).subscribe(
      (response) => {
        this.character = response;
      },
      (error) => {
        console.error('Error fetching character details:', error);
      }
    );
  }
}

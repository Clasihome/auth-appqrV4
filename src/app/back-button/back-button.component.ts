import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['..']); // Navega a la página anterior
  }
}
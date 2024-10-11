import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Navega a la página de inicio
  }

  logout() {
    // Lógica para cerrar sesión (puede ser borrar token, redirigir a login, etc.)
    this.router.navigate(['/login']);
  }
}

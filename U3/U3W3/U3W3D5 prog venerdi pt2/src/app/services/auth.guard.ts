// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Se l'utente è loggato, consente la navigazione
    } else {
      this.router.navigate(['/login']); // Se l'utente non è loggato, reindirizza alla pagina di login
      return false;
    }
  }
}

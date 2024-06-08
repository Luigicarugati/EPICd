// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId!: string | null;
  isLoggedIn: any;

  constructor() { }


  setUserId(id: string | null) {
    this.userId = id;
  }

  getUserId(): string | null {
    return this.userId;
  }


  isAuthenticated(): boolean {
    return !!this.userId;
  }
}

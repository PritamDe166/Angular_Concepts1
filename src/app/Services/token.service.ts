import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private static TOKEN_KEY = 'my_app_token';

  constructor() { }

  private static generateToken() : string{
      return Math.random().toString(36).substring(2);
  }

  static saveToken() : void{
      const token = this.generateToken();
      localStorage.setItem(this.TOKEN_KEY, token);
  }

}

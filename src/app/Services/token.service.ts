import { Injectable } from '@angular/core';
import { tokenKey } from 'src/app/Data-Models/ContantsFile';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }

  generateToken() : string{
      return Math.random().toString(36).substring(2);
  }

  saveToken() : void{
      const token = this.generateToken();
      localStorage.setItem(tokenKey, token);
  }

}

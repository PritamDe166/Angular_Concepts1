import { Component, inject } from '@angular/core';
import { tokenKey } from 'src/app/Data-Models/ContantsFile';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router : Router){}

  logout(){
    localStorage.removeItem(tokenKey);
    this.router.navigate(['login']);
  }
}

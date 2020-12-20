import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cogni-login';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login']);
    // if the user is logged in redirect to documents page
    // if (localStorage.getItem('currentUser')) {
    //   this.router.navigate(['/student']);
    // }
    // else {
    // }
  }
}

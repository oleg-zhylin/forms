import { Component, OnInit  } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';
  authorized = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute){ }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (localStorage.getItem('token') !== null) {
        this.authorized = true;
      }
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.authorized = false;
    this.router.navigate(['']);
  }
}

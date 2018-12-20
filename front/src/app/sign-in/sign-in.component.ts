import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  console = console;
  auth = true;
  constructor(private http: HttpClient, private router: Router) {
    document.body.id = "bg-gradient";
  }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['/forms']);
    }
  }
  signIn(data) {
    if (data.invalid === false) {
      this.http.post<any>(
        'http://localhost:3000/auth/sign-in',
        data.form.value,
        {headers:{'Content-Type':  'application/json'}})
        .subscribe(resp => {
          localStorage.setItem('token', resp.token);
          this.router.navigate(['/forms']);
        }, (err)=>{
          localStorage.removeItem('token');
          this.auth = false;
        });
    }
  }
}

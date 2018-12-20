import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  forms: [];
  constructor(private http: HttpClient, private router: Router) {
    this.loadFormsList();
    document.body.id = "bg-standart";
  }

  ngOnInit() {
  }

  loadFormsList() {
    this.http.get<any>('http://localhost:3000/forms',)
      .subscribe(resp => {
        this.forms = resp;
      }, (err)=>{
        console.log(err.status);
      });
  }

  goToForm(formId) {
    this.router.navigate(['/form/' + formId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {api_host, server_host} from "../constants";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  mySettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: false,
    closeOnSelect: true
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadForm();
    this.myOptions = [
    ];
  }
  loadForm() {
    this.http.get<any>('http://' + api_host + ':3000/forms/'+ this.route.snapshot.paramMap.get('id'))
      .subscribe(resp => {
        this.form = resp;
      }, (err)=>{
        console.log(err.status);
      });
  }

  sendForm(data) {
    let parametrs = JSON.stringify(data.form.value);
    let query = '';
    query += '?parametrs=' + parametrs;
    query += '&theme=' + this.form.theme;
    query += '&form_id=' + this.form.id;

    this.http.get<any>('http://' + server_host + ':3001/' + query)
      .subscribe(resp => {
      }, (err)=>{
        console.log(err.status);
      });

  }
  getType(val) {
    if (val.var_typ = 'N') {
      return 'number'
    }
    return 'text';
  }

  getOptions(element) {
    let res = [];
    for (let i = 0; i < element.option_label.length; i++) {
      res.push(
        { id: element.option_value[i], name: element.option_label[i] }
      );
    }
    return res;
  }
}

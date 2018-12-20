import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any;
  selectedItems = [];
  dropdownSettings = {};
  formData = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadForm();
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  loadForm() {
    this.http.get<any>('http://localhost:3000/forms/'+ this.route.snapshot.paramMap.get('id'))
      .subscribe(resp => {
        this.form = resp;
      }, (err)=>{
        console.log(err.status);
      });
  }

  sendForm(data) {
    console.log(data.form.value, this.formData);;
  }
  getType(val) {
    if (val.var_typ = 'N') {
      return 'number'
    }
    return 'text';
  }

  onItemSelect(item: any) {
   // console.log(item);
  }
  onSelectAll(items: any, elem) {
    //console.log(elem);
  }

  getOptions(element) {
    let res = [];
    for (let i = 0; i < element.option_label.length; i++) {
      res.push(
        { item_id: element.option_value[i], item_text: element.option_label[i] }
      );
    }
    return res;
  }
}

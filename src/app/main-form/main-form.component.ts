import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainFormComponent implements OnInit {
  showStyle: boolean;
  @Input() name: string;
  @Input() isBorder: boolean ;

  cssClasses = {'bold' : true, 'highlight': false, 'strike': true, 'color': 'green'};
  isBold: true;
  isHight: true;
  isStrike: true;


  form: FormGroup;
  person={
    'fieldName' : 'nombre',
    'fieldValue' : 'pepe'
  };


  constructor() { }

  ngOnInit() {


    this.form = new FormGroup({
      [this.person.fieldName]: new FormControl(this.person.fieldValue)
    });
  }

  getBackColor() {
      if (this.showStyle) {
        return 'yellow';
      } else {
        return '';
      }
  }

}

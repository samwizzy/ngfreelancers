import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from './user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Output() triggerData: EventEmitter<any> = new EventEmitter();
  @Input() food;
  constructor() {}

  ngOnInit(): void {
    console.warn(this.food);
    this.triggerData.emit('samuel');
  }

  title: 'Snippets';
  foods = ['Plantain'];
  color: string = 'red';
  show: boolean = false;

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  user: IUser = <IUser>{
    name: '',
    email: '',
    password: '',
  };

  email: string;

  onChange(event: any) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  handleSubmit(value) {
    console.log(value, 'all form values');
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Freelancer';
  form: {
    email: string;
  };

  constructor() {}

  ngOnInit(): void {}

  handleChange = (event) => {};
}

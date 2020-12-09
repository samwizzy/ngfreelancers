import { Component } from '@angular/core';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Freelancers';
  faCoffee = faUmbrellaBeach;

  email: string
  password: string

  foods = ["Pasta", "Beans", "Salad", "Turkey", "Sandwich"]
  show = true
  color = "red"

  constructor() { }

  changeTitle(title: string) {
    this.title = title;
  }

  handleChange(event){
    const {name, value} = event.target
    console.log(name, "name form")
    console.log(value, "value form")
  }
  handleSubmit(value){
    console.log(value, "all form values")
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Freelancers';
  foods: string[] = ['Freelancers'];

  constructor() {}

  triggerData(data) {
    console.warn(data);
  }

  sendMessage = () => {
    console.log('I am sending a message');
  };
}

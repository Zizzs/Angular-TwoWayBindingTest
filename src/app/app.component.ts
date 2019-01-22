import { Component } from '@angular/core';
import { Contact } from './models/contacts.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book';

  contacts: Contact[] = [
    new Contact("Alex", "Seattle", 18),
    new Contact("James", "Tacoma", 50)
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  academy = [
    { name: "Tosin", complexion: "black", hobbies: ["Suits", "Arsenal"] },
    {
      name: "Zino", complexion: "black", hobbies: ["Dancing", "Modeling"]
    },
    {
      name: "Sarah", complexion: "fair", hobbies: ["Singing", "Game"]
    },
    {
      name: "Najeeb", complexion: "black", hobbies: ["Footballing", "Reading"]
    },
    {
      name: "Charles", complexion: "black", hobbies: ["Marketing", "Finance"]
    }
  ];    
}
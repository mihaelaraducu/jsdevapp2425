import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  description: string = 'Welcome to the home page of our Angular application! Here you can find various features and functionalities that demonstrate the capabilities of Angular. Explore the components, services, and routing mechanisms that make this app dynamic and interactive.';
  myimg: string = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-303.png?sfvrsn=d8bbe35c_3'; 
  showImage:boolean = true;

  hello() {
    this.description = 'Hello, Angular World!';
  }
  showImg(){
    this.showImage = !this.showImage;

  }

}

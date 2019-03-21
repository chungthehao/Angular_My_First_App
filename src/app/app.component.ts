import { Component } from '@angular/core';

@Component({
  // để ý <app-root></app-root> ở index.html, Angular dùng nó để nhận biết cái cần replace ở file index.html
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Henry Chung';
}

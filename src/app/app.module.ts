import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // typescript cần để biết nó ở đâu

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule // this is simply a feature understood by Angular since it's part of an Angular module,
    // It tells Angular that we want to import some form features (để dùng thằng này: [(ngModel)]="name")
  ],
  providers: [],
  bootstrap: [AppComponent] // Nơi liệt kê tất cả các component mà Angular cần biết khi nó phân tích file index.html --> This case: 'AppComponent'
})
export class AppModule { }

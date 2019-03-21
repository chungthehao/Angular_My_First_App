import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // typescript cần để biết nó ở đâu

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // Để typescript biết đường import từ đâu

@NgModule({
  // Tạo ra các files thôi chưa đủ, phải báo cho Angular biết nếu muốn xài
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, // Để Angular biết mình muốn xài component này cho app module
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


/**
 * Chức năng của modules
 */
// - Angular dùng các module để bundle các pieces của hệ thống mình (vd như các component) thành các packages
// - Đưa cho Angular thông tin về tính năng nào hệ thống đang có
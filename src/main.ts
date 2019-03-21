import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // AppModule lôi vào từ file 'app.module.ts'
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Dòng dưới là nơi: bootstrap / khởi động app của mình bằng cách passing 'AppModule'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

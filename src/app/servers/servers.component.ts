import { Component, OnInit } from '@angular/core';

/**
 * - Trong @Component: BẮT BUỘC phải có "template" (template inline hoặc external file).
 * - Còn selector (có cách khác load component vào thay cho selector) hay style có hay không cũng đc!
 */
@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  // selector: '[app-servers]', // <div app-servers></div>
  // selector: '.app-servers', // <p class="app-servers"></p>

  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}

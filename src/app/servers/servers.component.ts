import { Component, OnInit } from '@angular/core';

/**
 * - Trong @Component: BẮT BUỘC phải có "template" (template inline hoặc external file).
 * - Còn selector (có cách khác load component vào thay cho selector) hay style có hay không cũng đc!
 */
@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

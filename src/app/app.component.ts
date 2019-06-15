import { Component } from '@angular/core';
import "../vendor/d3.r92.min.js";
import "../vendor/vanta.net.min.js";
declare var VANTA: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  ngOnInit() {
    VANTA.NET({ el: "body" })
  }
}

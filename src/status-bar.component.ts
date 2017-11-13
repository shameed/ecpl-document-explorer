import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecpl-status-bar',
  templateUrl: '/src/status-bar.component.html',
  styles: [
    `.panel{
            margin-bottom:0px;
            border-radius:0px;
        }`
  ]
})
export class StatusBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

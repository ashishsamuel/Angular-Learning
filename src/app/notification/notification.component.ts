import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="text-center alert alert-success" [ngClass]="{closeBtnStyle:displayNtfn}">
    <p class="para1">
      This website uses cookies to provide better user
      <button class="btn btn-success ms-3" (click)="closeNtfn()">close</button>
    </p>
  </div>`,
  styles: [`
  div{font-size:15px}`,
  ".para1{background:yellow}",
  ".closeBtnStyle{visibility:hidden;opacity:0;transition:visibility 0s 2s, opacity 2s linear;}"
]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNtfn:boolean = false;

  closeNtfn(){
      this.displayNtfn = true;
  }

}

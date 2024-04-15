import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <span class="btn" (click)="onClickMe()"> 
    {{ title }}
    <div class="loader" *ngIf="loading">...</div>
  </span>
  `,
  styles: [`
    .btn {
      display: flex;
      padding: 10px 20px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }

    .btn:hover {
      background-color: #0056b3;
    }
      
  /* HTML: <div class="loader"></div> */
  .loader {
      width: 120px;
      height: 22px;
      border-radius: 20px;
      color: #514b82;
      border: 2px solid;
      position: relative;
    }
    .loader::before {
      content: "";
      position: absolute;
      margin: 2px;
      inset: 0 100% 0 0;
      border-radius: inherit;
      background: currentColor;
      animation: l6 2s infinite;
    }
    @keyframes l6 {
        100% {inset:0}
    }
  `]
})

export class ButtonComponent implements OnInit {

  @Input() title: string = "My button";
  @Input() loading : boolean = false;

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(): void {
    //alert("Alert from button");
    this.onClick.emit();
 
  }
}
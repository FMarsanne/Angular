import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-button (onClick)="onClickButton(1)" [loading]="loading1" title="1st Button"></app-button>
    <app-modal [isOpen]="loading1" (onClose)="onClickButton(1)">
      <h1>Modal</h1>
      <p>Modal content</p>
    </app-modal>
    <br>    
    <button (click)="onClickButton(2)" [disabled]="loading2" class="btn btn-primary">2nd Button</button>
    <app-modal [isOpen]="loading2" (onClose)="onClickButton(2)">
      <h1>Modal 2</h1>
    </app-modal>
    <br>
    <br>
    <button type="button" class="btn btn-primary">
    Single Button
    </button>
  </div>
  `,
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {

    counter!: number;
    currdate!: string;
    idInterval: any; // Correction ici
    loading1: boolean = false; // Ajout d'une propriété pour gérer l'état de chargement
    loading2: boolean = false; // Ajout d'une propriété pour gérer l'état de chargement

  constructor(private router : Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.counter = 0;
    this.idInterval = setInterval( () => {
      this.counter++;
      this.currdate = new Date().toString(); // Correction ici
      console.log(this.idInterval);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.idInterval);
  }

  onClickButton(buttonNumber: number) {
    if (buttonNumber === 1) {
        this.loading1 = !this.loading1;
    } else if (buttonNumber === 2) {
        this.loading2 = !this.loading2;
    }
}
}
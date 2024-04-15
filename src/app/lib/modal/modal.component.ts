import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
/*  template: `
  <div *ngIf="isOpen" class="overlay" (click)="onClose.emit()">
    <div class="modal" (click)="onClickModal($event)">
      <!-- Bouton de fermeture Bootstrap -->
      <button type="button" class="close" (click)="onClose.emit()">
        <span>&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
  </div>
  `, */
  template: `
  <div *ngIf="isOpen" class="overlay" (click)="onClose.emit()">
    <div class="modal" (click)="onClickModal($event)">
      <!-- Bouton de fermeture Bootstrap -->
      <button type="button" class="close" (click)="onClose.emit()">
      <span>&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [`
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      color: #060905;
    }
    .overlay .modal {
      margin: 10% auto; /* Réduire la marge supérieure et inférieure */
      background-color: #fefefe;
      width: 300px; /* Définir une largeur fixe */
      min-height: 200px;
      position: relative;
      padding: 10px 20px;
      display: block!important;
    }
    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 10px;
      right: 10px;
      color: #000;
      font-size: 30px;
      cursor: pointer;
      border: 2px solid black;
      border-radius: 50px;
      width: 20px;
      height: 20px;
      padding-top: 1px;
      user-select: none;
    }
    .close:hover {
      background-color: #777;
      color: white;
    }
  `]
})
export class ModalComponent implements OnInit {

  @Input() isOpen : boolean = true;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickModal(e: MouseEvent) {
    console.log("Close");
    e.stopPropagation();
  }
}
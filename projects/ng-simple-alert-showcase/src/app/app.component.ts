import { Component } from '@angular/core';
import { NgSimpleAlertService } from '../../../ng-simple-alert/src/lib/ng-simple-alert.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-simple-alert></ng-simple-alert>

    <button class="success" (click)="createSuccessMessage()">
      Create success alert
    </button>
    <button class="danger" (click)="createDangerMessage()">
      Create danger alert
    </button>
    <button class="warning" (click)="createWarningMessage()">
      Create warning alert
    </button>
    <button class="info" (click)="createInfoMessage()">
      Create info alert
    </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private alertService: NgSimpleAlertService) {}

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
}

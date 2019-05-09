import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SimpleAlertMessage {
  prefix: string;
  message: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgSimpleAlertService {
  public alertMessage$ = new Subject<SimpleAlertMessage>();

  public createSuccessAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
  }

  public createDangerAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
  }

  public createWarningAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
  }

  public createInfoAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
  }

  private createAlertMessage(prefix: string, message: string, color: string): SimpleAlertMessage {
    return { prefix, message, color };
  }
}

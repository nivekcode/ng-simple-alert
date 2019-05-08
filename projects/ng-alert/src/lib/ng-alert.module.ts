import { NgModule } from "@angular/core";
import { NgAlertComponent } from "./ng-alert.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NgAlertComponent],
  imports: [CommonModule],
  exports: [NgAlertComponent]
})
export class NgAlertModule {}

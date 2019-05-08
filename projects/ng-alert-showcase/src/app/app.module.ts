import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgAlertModule } from "../../../ng-alert/src/lib/ng-alert.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

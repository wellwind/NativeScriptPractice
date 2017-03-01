import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { ActionBarComponent } from "./action-bar/action-bar.component";

@NgModule({
  declarations: [AppComponent, ActionBarComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

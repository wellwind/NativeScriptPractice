import { LoginInputComponent } from './login-input/login-input.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import {ActionBarComponent} from "./action-bar/action-bar.component";

@NgModule({
  declarations: [AppComponent, ActionBarComponent, LoginInputComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import ElementRefComponent from "./element-ref/element-ref.component";
import ViewContainerRefComponent from "./view-container-ref/view-container-ref.component";
import ViewRefComponent from "./view-ref/view-ref.component";
import WelcomeComponent from "./welcome/welcome.component";
import { TemplateRefComponent } from "./template-ref/template-ref.component";
import { HighlightDirective } from "./element-ref/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    ElementRefComponent,
    ViewContainerRefComponent,
    ViewRefComponent,
    WelcomeComponent,
    TemplateRefComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

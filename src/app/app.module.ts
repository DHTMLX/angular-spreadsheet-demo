import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpreadsheetComponent } from "./spreadsheet/spreadsheet.component";

@NgModule({
  declarations: [AppComponent, SpreadsheetComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})

export class AppModule {}

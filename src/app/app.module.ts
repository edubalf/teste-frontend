import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { LayoutComponent } from './pages/shared/layout/layout.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})

export class AppModule { }

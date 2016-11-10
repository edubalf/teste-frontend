import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { LayoutComponent } from './pages/shared/layout/layout.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';
import { HeadBarComponent } from './components/shared/head-bar/head-bar.component';
import { RatingFormat } from './pages/serie-detail/serie-detail.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    SeriesListComponent,
    SerieDetailComponent,
    HeadBarComponent,
    RatingFormat
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { LayoutComponent } from './pages/shared/layout/layout.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';
import { HeadBarComponent } from './components/shared/head-bar/head-bar.component';
import { RatingFormat } from './pipes/serie-detail/serie-detail.pipe';
import { SerieListItemComponent } from './components/serie-list/serie-list-item/serie-list-item.component';
import { SerieDetailContentComponent } from './components/serie-detail/serie-detail-content/serie-detail-content.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SeriesListComponent,
    SerieDetailComponent,
    HeadBarComponent,
    RatingFormat,
    SerieListItemComponent,
    SerieDetailContentComponent
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

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';

const appRoutes: Routes = [
    { path: '', component: SeriesListComponent },
    { path: 'serie', component: SeriesListComponent },
    { path: 'serie/:slug', component: SerieDetailComponent },
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
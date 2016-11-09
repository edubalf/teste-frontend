import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesListComponent } from './pages/series-list/series-list.component';

const appRoutes: Routes = [
    { path: '', component: SeriesListComponent },
    { path: 'series-list', component: SeriesListComponent },
    { path: 'series-list/:slug', component: SeriesListComponent },
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
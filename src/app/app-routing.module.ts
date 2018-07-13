import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { AnimationsComponent } from './animations/animations.component';


const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  { path: 'search', component: SearchComponent },
  { path: 'animations', component: AnimationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

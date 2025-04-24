import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'child', component: ChildComponent },
  { path: 'Firstcomponent', component: FirstcomponentComponent },
  { path: 'parent', component: AppComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: AppComponent },
];

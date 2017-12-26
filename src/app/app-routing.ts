import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { PathIntroComponent } from './path-intro/path-intro.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        component: PathIntroComponent
      },
      {
        path: 'detail/:id',
        component: PathDetailsComponent
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { PathIntroComponent } from './path-intro/path-intro.component';
import { MoreComponent } from './more/more.component';

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
  { path: 'more/:id', component: MoreComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);

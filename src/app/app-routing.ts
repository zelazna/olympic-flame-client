import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { PathIntroComponent } from './path-intro/path-intro.component';
import { EventsComponent } from './events/events.component';
import { TorchVotesComponent } from './torch-votes/torch-votes.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
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
  { path: 'path/:id', component: EventsComponent },
  { path: 'vote', component: TorchVotesComponent },
  // otherwise redirect to root
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

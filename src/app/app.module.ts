import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { FlamePathLinkComponent } from './flame-path-link/flame-path-link.component';
import { FlamePathsListComponent } from './flame-paths-list/flame-paths-list.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuModalComponent } from './menu-modal/menu-modal.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { routing } from './app-routing';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PathIntroComponent } from './path-intro/path-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    FlamePathLinkComponent,
    FlamePathsListComponent,
    MenuComponent,
    HomeComponent,
    MenuModalComponent,
    PathDetailsComponent,
    BreadcrumbComponent,
    PathIntroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      cache: new InMemoryCache()
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultsComponent } from './results/results.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Landing Page',
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    title: 'Contacts',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About us',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Image Gallery',
  },
  {
    path: 'news',
    component: NewsComponent,
    title: 'News',
  },
  {
    path: 'news/:title',
    component: NewsArticleComponent,
    title: 'News',
  },
  {
    path: 'results',
    component: ResultsComponent,
    title: 'Search Results',
  },
  { path: '**', component: Page404Component, title: 'Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

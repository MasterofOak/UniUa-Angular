import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { NewsFetchService } from './fetch-services/news-fetch.service';
import { UniversitiesFetchService } from './fetch-services/universities-fetch.service';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';
import { NewsArticleComponent } from './news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ContactsComponent,
    AboutComponent,
    GalleryComponent,
    NewsComponent,
    NewsSliderComponent,
    TrendingNewsComponent,
    BackgroundSliderComponent,
    SearchBarComponent,
    ResultsComponent,
    NewsArticleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsFetchService, UniversitiesFetchService],
  bootstrap: [AppComponent],
})
export class AppModule {
//   console.log('Web ' + Breakpoints.Web);
// console.log('WebLandscape ' + Breakpoints.WebLandscape);
// console.log('WebPortrait ' + Breakpoints.WebPortrait);

// console.log('Tablet ' + Breakpoints.Tablet);
// console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
// console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

// console.log('Handset ' + Breakpoints.Handset);
// console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
// console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

// console.log('XSmall ' + Breakpoints.XSmall);
// console.log('Small ' + Breakpoints.Small);
// console.log('Medium ' + Breakpoints.Medium);
// console.log('Large ' + Breakpoints.Large);
// console.log('XLarge ' + Breakpoints.XLarge);
}

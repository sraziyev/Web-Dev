import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service'; 
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { AppComponent } from './app.component'; 

const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id/vacancies', component: VacancyListComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
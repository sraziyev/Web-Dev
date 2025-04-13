import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './../models/company';
import { Vacancy } from './../models/vacancy';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/cbv/companies/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`<span class="math-inline">\{this\.apiUrl\}/cbv/companies/</span>{companyId}/vacancies/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/cbv/vacancies/`);
  }

  getVacancy(vacancyId: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`<span class="math-inline">\{this\.apiUrl\}/cbv/vacancies/</span>{vacancyId}/`);
  }
}
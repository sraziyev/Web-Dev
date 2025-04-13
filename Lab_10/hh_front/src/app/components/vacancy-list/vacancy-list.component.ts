
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Vacancy } from '../../models/vacancy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
})
export class VacancyListComponent implements OnInit {
  companyId: number | null = null;
  vacancies: Vacancy[] = [];
  companyName: string = ''; 

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.companyId = +params.get('id')!;
      if (this.companyId) {
        this.loadCompanyVacancies(this.companyId);
      }
    });
  }

  loadCompanyVacancies(companyId: number): void {
    this.apiService.getCompanyVacancies(companyId).subscribe(
      (data) => {
        this.vacancies = data;
        if (data.length > 0) {
          this.companyName = data[0].company.name; 
        }
      },
      (error) => {
        console.error(`Error loading vacancies for company ${companyId}:`, error);
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.apiService.getCompanies().subscribe(
      (data) => {
        this.companies = data;
      },
      (error) => {
        console.error('Error loading companies:', error);
      }
    );
  }

  showVacancies(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']);
  }
}
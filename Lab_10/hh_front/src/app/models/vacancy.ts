
import { Company } from './company';

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
  company_id: number; 
}
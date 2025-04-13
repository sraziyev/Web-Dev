
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def company_detail(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data)

def company_vacancies(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacancy_detail(request, vacancy_id):
    vacancy = get_object_or_404(Vacancy, id=vacancy_id)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)
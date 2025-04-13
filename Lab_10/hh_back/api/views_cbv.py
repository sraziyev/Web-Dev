
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyListCBV(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

class CompanyDetailCBV(APIView):
    def get(self, request, company_id):
        company = get_object_or_404(Company, id=company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

class CompanyVacanciesCBV(APIView):
    def get(self, request, company_id):
        company = get_object_or_404(Company, id=company_id)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyListCBV(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetailCBV(APIView):
    def get(self, request, vacancy_id):
        vacancy = get_object_or_404(Vacancy, id=vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
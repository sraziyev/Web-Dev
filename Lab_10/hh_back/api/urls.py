
from django.urls import path
from . import views_fbv, views_cbv

urlpatterns = [
    path('fbv/companies/', views_fbv.company_list, name='fbv-company-list'),
    path('fbv/companies/<int:company_id>/', views_fbv.company_detail, name='fbv-company-detail'),
    path('fbv/companies/<int:company_id>/vacancies/', views_fbv.company_vacancies, name='fbv-company-vacancies'),
    path('fbv/vacancies/', views_fbv.vacancy_list, name='fbv-vacancy-list'),
    path('fbv/vacancies/<int:vacancy_id>/', views_fbv.vacancy_detail, name='fbv-vacancy-detail'),

    path('cbv/companies/', views_cbv.CompanyListCBV.as_view(), name='cbv-company-list'),
    path('cbv/companies/<int:company_id>/', views_cbv.CompanyDetailCBV.as_view(), name='cbv-company-detail'),
    path('cbv/companies/<int:company_id>/vacancies/', views_cbv.CompanyVacanciesCBV.as_view(), name='cbv-company-vacancies'),
    path('cbv/vacancies/', views_cbv.VacancyListCBV.as_view(), name='cbv-vacancy-list'),
    path('cbv/vacancies/<int:vacancy_id>/', views_cbv.VacancyDetailCBV.as_view(), name='cbv-vacancy-detail'),
]
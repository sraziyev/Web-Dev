
from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VacancyListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    salary = serializers.FloatField()
    company_id = serializers.IntegerField(read_only=True, source='company.id')
    company_name = serializers.CharField(read_only=True, source='company.name')


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Vacancy
        fields = '__all__'
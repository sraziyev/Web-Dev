# api/urls.py
from django.urls import path
from .views import CategoryListView, CategoryDetailView, ProductListView, ProductDetailView, CategoryProductsView

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:pk>/', CategoryDetailView.as_view()),
    path('products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
    path('categories/<int:pk>/products/', CategoryProductsView.as_view()),
]
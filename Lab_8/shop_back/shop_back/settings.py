import os
from pathlib import Path

# Базовая директория проекта
BASE_DIR = Path(__file__).resolve().parent.parent

# Включаем режим отладки
DEBUG = False

SECRET_KEY = 'l7(zg+251(mrn4h%pc_=x0w@y=)ml1%n!rg!bhp+t6)96b9-jq'

# Разрешенные хосты
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

# Установленные приложения
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'api',
]

# Middleware
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Разрешает запросы с фронтенда
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Разрешаем запросы с Angular (если он запущен локально)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",
]

# Указываем главный файл маршрутов (ОБЯЗАТЕЛЬНО)
ROOT_URLCONF = 'shop_back.urls'

# Шаблоны (если планируешь рендерить HTML, пока можно оставить так)
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# База данных (SQLite)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / "db.sqlite3",
    }
}

# Настройки Django REST Framework (только JSON)
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': ['rest_framework.renderers.JSONRenderer'],
    'DEFAULT_PARSER_CLASSES': ['rest_framework.parsers.JSONParser'],
}

# Статические файлы
STATIC_URL = '/static/'

# ID по умолчанию
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

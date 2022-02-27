from django import views
from django.urls import path
from .views import crop_predict,HomePageView

urlpatterns = [
    path('weight/', crop_predict.as_view(), name = 'crop_predict'),
   # path('',views.index, name = 'index'),
    path("", HomePageView.as_view(), name="home")
    
]
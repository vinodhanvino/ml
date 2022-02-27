
from django.http import HttpResponse
import numpy as np
import pandas as pd
from .apps import ApiConfig
from rest_framework.views import APIView
from rest_framework.response import Response


class crop_predict(APIView):
    def post(self,request):
        
        convert  = []
        data = request.data
        temp = data['data']
        #print(temp)
        int_list = list(map(int,temp))
        # print(int_list)
        ml_model = ApiConfig.model
        pred = ml_model.predict([int_list])
        print(pred)
        
        return Response(pred, status=200)



def index(request):
    return HttpResponse('Hello world')



from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"

    
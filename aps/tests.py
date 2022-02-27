from django.test import TestCase

# Create your tests here.
from rest_framework.decorators import api_view


@api_view(['GET'])
def pridict(request):
    pass
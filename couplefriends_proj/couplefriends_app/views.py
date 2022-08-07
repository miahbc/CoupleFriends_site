from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view 
# from .models import AppUser as User
import requests

# Create your views here.

@api_view(['GET','POST'])
def yelpapi(request):

    url = "https://api.yelp.com/v3/events?location=DC&radius=32186&start_date=1660017600&sort_on=popularity&limit=500"

    results={}
    headers = {
    'Authorization': 'Bearer lcFL49Xok8i01XW9qJqchk3RWDku9IORIJbQmBy61myAjlvPkUejwIAPZacq1ylC2aJRRLEZHFgEYuFFzA8EFjEC6hXmxiGIaG-Mqrc6z0JOT0lgHcH2Uuz7C6ztYnYx'
    }

    response = requests.request("GET", url, headers=headers, data=results)

    # print(response.text)
    print(response.text)
    data = response.text
    return HttpResponse([data])



def send_the_homepage(request):
    print('home!!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


# @api_view(['POST'])
# def sign_up(request):
#     try:
#         User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
#     except Exception as e:
#         print(str(e))
#     return HttpResponse('hi')


# @api_view(['POST'])
# def log_in(request):
#     print(dir(request))
#     print(dir(request._request))

#     # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
#     email = request.data['email']
#     password = request.data['password']
#     # user = authenticate(username=email, password=password, email=email)
#     user = authenticate(username=email, password=password)
#     print('user?')
#     print(user.email)
#     print(user.password)
#     if user is not None:
#         if user.is_active:
#             try:
#                 # access the base request, not the DRF request
#                 # this starts a login session for this user
#                 login(request._request, user)
#             except Exception as e:
#                 print('except')
#                 print(str(e))
#             return HttpResponse('success!')
#             # Redirect to a success page.
#         else:
#             return HttpResponse('not active!')
#             # Return a 'disabled account' error message
#     else:
#         return HttpResponse('no user!')
#         # Return an 'invalid login' error message.


# @api_view(['POST'])
# def log_out(request):
#     logout(request)
#     return JsonResponse({'success':True})


# @api_view(['GET'])
# def who_am_i(request):
#     # Make sure that you don't send sensitive information to the client, such as password hashes
#     # raise Exception('oops')
#     if request.user.is_authenticated:
#         data = serializers.serialize("json", [request.user], fields=['email', 'username'])

#         return HttpResponse(data)
#     else:
#         return JsonResponse({'user':None})


# def join(request):
# # path('join', views.join),
#     print('join page!')
#     theJoinPage = open('static/index.html').read()
#     return HttpResponse(theJoinPage)


# def view_other_couples(request):
# # path('view_other_couples', views.view_other_couples),
#     print('view_other_couples page!')
#     theViewOtherCouplesPage = open('static/index.html').read()
#     return HttpResponse(theViewOtherCouplesPage)


# def dates(request):
# # path('dates', views.dates),
#     print('dates page!')
#     theDatesPage = open('static/index.html').read()
#     return HttpResponse(theDatesPage)

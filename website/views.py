from django.shortcuts import render
from .models import Acct, Dev, Cert, AboutMe
from datetime import datetime


def index(request):
    acct = Acct.objects.all()
    devs = Dev.objects.all()
    certs = Cert.objects.all()
    year = datetime.now().year
    yearAcct = year-2011
    aboutMe = AboutMe.objects.all()

    context = {
        'devs': devs,
        'certs': certs,
        'year': year,
        'acct': acct,
        'yearAcct': yearAcct,
        'aboutMe':aboutMe,
    }

    return render(request, 'website/index.html', context)

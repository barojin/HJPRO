# Run on macOS Big Sur 11.5

## Developing History
1. I made the view with React.    
2. I made the backend with Django.  
3. I made the dynamoDB on AWS and tried to integrate.  
   I knew that I need to implement the part for interface between admin and dynamoDB from the scratch.
   So I changed the DB part to postgreSQL since I am using the Django for a productivity.
4. I'm doing it. Mon Aug 16.

### Requirements
- Python ()
- Django (pip3 install django)
- React
- Django rest framework (pip3 install djangorestframework)

1. Before running 
- Install 
- Create the virtual environment.
- When you activate the venv, it sticks on the current terminal instance. The activation terminates if the terminal closed.
- below code make the venv.
```
python3 -m venv ~/.virtualenvs/djangodev // create
source ~/.virtualenvs/djangodev/bin/activate // activate
```
- The current venv name shows up on the most left braces of terminal screen, e.g.
```
(djangodev) (base) MyMacBook-Pro:mysite username$ 
```
# Run with docker


# Steps How I make
1. To create a project, write the command below
```django-admin startproject directoryname```

2.
python manage.py startapp pages

3. 
url settings

```pages.urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

4. # Project

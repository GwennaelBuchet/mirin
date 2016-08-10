#Web server for MirIn project
#### An interactive mirror for Raspbery Pi

The server is developed in Python using Django framework.

##Setup

On Fedora/Korora environment
```shell
#install Python
sudo dnf install python3
#install Django web server framework
sudo python3 -m pip install Django
# OpenWeatherMap API
sudo python3 -m pip install pyowm
```

##Run
```shell
python manage.py runserver 8080
```


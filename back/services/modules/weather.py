import pyowm
from django.http import HttpResponse

"Weather module used by the interactive mirror"

# YCreate an account here : https://home.openweathermap.org/users/sign_up
__owm = pyowm.OWM(API_key='bf14e32fe69a119b541b93d99c16cf75', language='fr')


def get(request, city='Lille', country_code=''):
    __req = city
    if country_code != '':
        __req += ',' + country_code

    observation = __owm.weather_at_place(__req)
    w = observation.get_weather()

    wind = w.get_wind()  # {'speed': 4.6, 'deg': 330}
    clouds = w.get_clouds()
    humidity = w.get_humidity()  # 87
    temperature = w.get_temperature('celsius')

    return HttpResponse(w.to_JSON())

"""def get_forecast(self, city='Lille', country='', nb_days=1):
    __req = city
    if country != '':
        __req += ',' + country

    # Daily weather forecast just for the next 6 days over London
    fc = self.__owm.daily_forecast(__req, limit=6)
    f = fc.get_forecast()
    lst = f.get_weathers()
    # ...or iterate directly over the Forecast object
    for weather in f:
        print(weather.get_reference_time('iso'), weather.get_status())
"""

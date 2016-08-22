package main

import (
	"net/http"
	"mirin/weather"
	"github.com/rs/cors"
	"github.com/gorilla/mux"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:*"},
		AllowedMethods: []string{"GET", "POST", "DELETE"},
		AllowCredentials: true,
	})

	//mux := http.NewServeMux()
	r := mux.NewRouter()
	r.HandleFunc("/api/v1/weather/current", weather.GetCurrentWeatherHandler)
	r.HandleFunc("/api/v1/weather/forecast/{nbForecast:[1-9]+}", weather.GetForecastWeatherHandler)

	handler := c.Handler(r)
	http.ListenAndServe(":8090", handler)
}

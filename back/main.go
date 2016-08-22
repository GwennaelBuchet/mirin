package main

import (
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"mirin/weather"
	"net/http"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:*"},
		AllowedMethods:   []string{"GET", "POST", "DELETE"},
		AllowCredentials: true,
	})

	r := mux.NewRouter()
	r.HandleFunc("/api/v1/weather/forecast/{nbForecast:[1-9]+}", weather.GetForecastWeatherHandler)

	handler := c.Handler(r)
	http.ListenAndServe(":8090", handler)
}

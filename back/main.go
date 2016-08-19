package main

import (
	"net/http"
	"mirin/weather"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:*"},
		AllowedMethods: []string{"GET", "POST", "DELETE"},
		AllowCredentials: true,
	})

	mux := http.NewServeMux()
	mux.HandleFunc("/api/v1/weather/current", weather.GetCurrentWeatherHandler)
	mux.HandleFunc("/api/v1/weather/forecast", weather.GetForecastWeatherHandler)

	handler := c.Handler(mux)
	http.ListenAndServe(":8090", handler)
}

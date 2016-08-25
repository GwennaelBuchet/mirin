package main

import (
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"mirin/agenda"
	"mirin/auth"
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
	r.HandleFunc("/api/v1/agenda/incoming", agenda.GetNextEvents)
	r.HandleFunc("/api/v1/GoogleLogin", auth.HandleGoogleLogin)
	r.HandleFunc("/api/v1/GoogleCallback", auth.HandleGoogleCallback)

	handler := c.Handler(r)
	http.ListenAndServe(":8090", handler)
}

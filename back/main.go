package main

import (
	"net/http"
	"mirin_back/weather"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:*"},
		AllowedMethods: []string{"GET", "POST", "DELETE"},
		AllowCredentials: true,
	})

	mux := http.NewServeMux()
	mux.HandleFunc("/weather", weather.HereHandler)

	handler := c.Handler(mux)
	http.ListenAndServe(":8090", handler)
}

package weather

import (
	"encoding/json"

	owm "github.com/briandowns/openweathermap"
	"log"
	"net/http"
)

// URL is a constant that contains where to find the IP locale info
const URL = "http://ip-api.com/json"

// LocationData will hold the result of the query to get the IP
// address of the caller.
type LocationData struct {
	Status      string  `json:"status"`
	Country     string  `json:"country"`
	CountryCode string  `json:"countryCode"`
	Region      string  `json:"region"`
	RegionName  string  `json:"regionName"`
	City        string  `json:"city"`
	Zip         string  `json:"zip"`
	Lat         float64 `json:"lat"`
	Lon         float64 `json:"lon"`
	Timezone    string  `json:"timezone"`
	ISP         string  `json:"isp"`
	ORG         string  `json:"org"`
	AS          string  `json:"as"`
	Message     string  `json:"message"`
	Query       string  `json:"query"`
}

// getLocation will get the location details for where this
// application has been run from.
func getLocation() (*LocationData, error) {
	response, err := http.Get(URL)
	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()
	r := &LocationData{}
	if err = json.NewDecoder(response.Body).Decode(&r); err != nil {
		return nil, err
	}
	return r, nil
}

// getCurrent gets the current weather for the provided location in
// the units provided.
func getCurrent(l *LocationData, u, lang string) *owm.CurrentWeatherData {
	w, err := owm.NewCurrent(u, lang) // Create the instance with the given unit
	if err != nil {
		log.Fatal(err)
	}
	//w.CurrentByName(l) // Get the actual data for the given location
	w.CurrentByCoordinates(
		&owm.Coordinates{
			Longitude: l.Lon,
			Latitude: l.Lat,
		},
	)

	return w
}

// hereHandler will take are of requests coming in for the "/here" route.
func HereHandler(w http.ResponseWriter, r *http.Request) {

	location, err := getLocation()
	if err != nil {
		log.Fatal(err)
	}
	wd := getCurrent(location, "C", "FR")

	j, err := json.Marshal(wd)
	if err == nil {
		w.Write([]byte(j));
	}

}
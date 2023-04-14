package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"reel.flix-api/models"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Movies up and running",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)

}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie

	rd, _ := time.Parse("2006-01-02", "1994-01-01")

	shawshank := models.Movie{
		ID:          1,
		Title:       "The Shawshank Redemption",
		ReleaseDate: rd,
		RunTime:     116,
		MPAARating:  "PG-13",
		Description: "The Shawshank Redemption",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, shawshank)

	godfather := models.Movie{
		ID:          2,
		Title:       "The Godfather",
		ReleaseDate: rd,
		RunTime:     116,
		MPAARating:  "PG-13",
		Description: "The Godfather",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, godfather)

	out, err := json.Marshal(movies)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

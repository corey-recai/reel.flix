package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) routes() http.Handler {
	// create a router muc
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(app.enableCors)

	mux.Get("/", app.Home)

	mux.Get("/authenticate", app.authenticate)
	mux.Get("/movies", app.AllMovies)

	return mux
}

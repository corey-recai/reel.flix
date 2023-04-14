package repository

import (
	"database/sql"

	"reel.flix-api/models"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllMovies() ([]*models.Movie, error)
}

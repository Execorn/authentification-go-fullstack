package routes

import (
	"backend-app/backend/core/middleware"
	"log"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

// Logout deletes the current user session and redirects the user to the index page
func (controller Controller) Logout(c *gin.Context) {
	session := sessions.Default(c)
	session.Delete(middleware.SessionIDKey)
	err := session.Save()
	if err != nil {
		log.Println(err)
	}

	c.Redirect(http.StatusTemporaryRedirect, "/")
}

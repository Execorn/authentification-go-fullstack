package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Index renders the HTML of the index page
func (controller Controller) Rice(c *gin.Context) {
	pd := controller.DefaultPageData(c)
	pd.Title = pd.Trans("Home")
	c.HTML(http.StatusOK, "rices_ext.html", pd)
}

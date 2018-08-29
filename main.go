package main 

import ( 
	"github.com/gin-gonic/gin" 
	"net/http" 
) 

type Book struct {
	Number string	`json:"number"`
	Name	 string `json:"name"`
	Author string	`json:"title"`
	Pages	 string	`json:"pages"`
	Price  string `json:"price"`
}

var bookList = []Book{}

var router *gin.Engine

func main() { 

	router := gin.Default()

	router.LoadHTMLGlob("templates/*.html")

	router.GET("/", startPage)
	router.GET("/books", getBooks)
	router.POST("/books", createBook)
	router.PUT("/books/:id", editBook)
	router.DELETE("/books/:id", deleteBook)
	router.Run() 
}

func startPage(c *gin.Context) {
	c.HTML(
		http.StatusOK,
		"index.html",
		gin.H{
			"title": "Book Store",
		},
	)
}

func getBooks(c *gin.Context) {
	if len(bookList) <= 0 {
		c.JSON(
			http.StatusNotFound, 
			gin.H{
				"status": http.StatusNotFound, 
				"message": "No todo found!",
			},
		)
	} else {
		c.JSON(
			http.StatusOK, 
			gin.H{
				"status": http.StatusOK, 
				"data": bookList,
			},
		)
	}
}

func createBook(c *gin.Context) {

	var json Book
	c.BindJSON(&json)

	bookList = append(bookList, json)

	c.JSON(
		http.StatusCreated, 
		gin.H{
			"status": http.StatusCreated, 
			"message": "Book item created",
			"data":  bookList,
		},
	)
}

func editBook(c *gin.Context) {
	bookId := c.Param("id")
	c.JSON(
		http.StatusOK, 
		gin.H{
			"status": http.StatusOK, 
			"data": "Привет" + bookId,
		},
	)
}

func deleteBook(c *gin.Context) {

}
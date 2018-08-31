package main 

import ( 
	"github.com/gin-gonic/gin" 
	"net/http" 
) 

type Book struct {
	Number string	`json:"number"`
	Name	 string `json:"name"`
	Author string	`json:"author"`
	Pages	 string	`json:"pages"`
	Price  string `json:"price"`
}

var bookList = []Book{}

var router *gin.Engine

func main() { 

	router := gin.Default()

	router.LoadHTMLGlob("templates/*.html")

	router.GET("/", StartPage)
	router.GET("/books", GetBooks)
	router.POST("/books", CreateBook)
	router.PUT("/books/:id", EditBook)
	router.DELETE("/books/:id", DeleteBook)
	router.OPTIONS("/books", OptionsBook)    
	router.OPTIONS("/books/:id", OptionsBook)
	router.Run() 
}

func StartPage(c *gin.Context) {
	c.HTML(
		http.StatusOK,
		"index.html",
		gin.H{
			"title": "Book Store",
		},
	)
}

func GetBooks(c *gin.Context) {
	if len(bookList) <= 0 {
		c.JSON(
			http.StatusNotFound, 
			gin.H{
				"status": http.StatusNotFound, 
				"message": "No books found!",
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

func CreateBook(c *gin.Context) {

	var newBook Book
	c.BindJSON(&newBook)

	bookList = append(bookList, newBook)

	c.JSON(
		http.StatusCreated, 
		gin.H{
			"status": http.StatusCreated, 
			"message": "Book item created",
			"data": bookList,
		},
	)
}

func EditBook(c *gin.Context) {
	bookId := c.Param("id")
	var isEdited bool
	var newBook Book
	c.BindJSON(&newBook)

	bookList, isEdited = Editor(bookList, bookId, newBook)
	if (isEdited) {
		c.JSON(
			http.StatusOK, 
			gin.H{
				"status": http.StatusOK, 
				"message": "book edited",
				"data": bookList,
			},
		)
	} else {
		c.JSON(
			http.StatusNotFound, 
			gin.H{
				"status": http.StatusNotFound, 
				"message": "no book found",
			},
		)
	}
}

func DeleteBook(c *gin.Context) {
	bookId := c.Param("id")
	var isDeleted bool
	bookList, isDeleted = Filter(bookList, bookId)
	if (isDeleted) {
		c.JSON(
			http.StatusOK, 
			gin.H{
				"status": http.StatusOK, 
				"message": "book deleted",
				"data": bookList,
			},
		)
	} else {
		c.JSON(
			http.StatusNotFound, 
			gin.H{
				"status": http.StatusNotFound, 
				"message": "no book found",
			},
		)
	}
}

func Filter(list []Book, number string) ([]Book, bool) {
	temp := make([]Book, 0)
	deleted := false
	for _, book := range list {
		if book.Number != number {
			temp = append(temp, book)
		} else {
			deleted = true
		}
	}
	return temp, deleted
}

func Editor(list []Book, number string, newBook Book) ([]Book, bool) {
	temp := make([]Book, 0)
	edited := false
	for _, book := range list {
		if book.Number != number {
			temp = append(temp, book)
		} else {
			temp = append(temp, newBook)
			edited = true
		}
	}
	return temp, edited
}

func OptionsBook(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE,POST, PUT")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	c.Next()
}
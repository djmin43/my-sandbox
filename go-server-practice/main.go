package main

import (
	"fmt"
	"net/http"
)

type hotdog int

func (s hotdog) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello World!!")
}

func main() {
    var hello hotdog
		http.ListenAndServe(":8080", hello)
}
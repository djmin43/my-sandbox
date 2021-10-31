package main

import (
	"fmt"
	"strings"
)

func main() {
	greeting := "hello there friends!"

	fmt.Println(strings.Contains(greeting, "hello"))
}
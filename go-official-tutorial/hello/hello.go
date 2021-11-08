package main

import (
	"fmt"

	"example.com/greetings"
)

func main() {
	message := greetings.Hello("catcat")
	fmt.Println(message)
}
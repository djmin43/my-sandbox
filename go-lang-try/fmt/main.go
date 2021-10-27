package main

import "fmt"

func main() {

	age := 33
	name := "min"
	
	// Print - does not add a new line
	fmt.Print("hello, \n")
	fmt.Print("world!")

	// Println
	fmt.Println("hello ninjas!")
	fmt.Println("goodbye ninjas!")

	fmt.Println("my age is", age, "and my name is", name)

	// Printf (formatted strings) %_ = format specifier
	fmt.Printf("my age is %v and my name is %v \n", age, name)
	// %q adds quotation marks
	fmt.Printf("my age is %q and my name is %q \n", age, name)
	// %T adds type
	fmt.Printf("age is of type%T \n", age)
	// %f is float
	fmt.Printf("you scored %f points \n", 225.55)
	fmt.Printf("you scored %0.4f points \n", 225.55)

	// Sprintf (save formatted strings)
	var str = fmt.Sprintf("my age is %v and my name is %v \n", age, name)

	fmt.Println("the saved string is:", str)

}
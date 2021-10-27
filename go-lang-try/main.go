package main

// package form go standard library. fmt -> formatting strings and prnting messages to console.
// method after import package should start with Capital.
import "fmt"

// go will look for main at first. there should be only one main function in the entry file.
func main() {

	// strings are double-quoted
	var nameOne string = "mario"
	var nameTwo = "luigi"
	var nameThree string

	fmt.Println(nameOne, nameTwo, nameThree)

	nameOne = "peach"
	nameThree = "bowser"

	fmt.Println(nameOne, nameTwo, nameThree)

	// ":" colons only for the first time. replaces 'var', and can't use this outside function.
	nameFour := "yoshi"
	fmt.Println(nameFour)

	// ints
	var ageOne int = 20
	var ageTwo = 30
	ageThree := 40

	fmt.Println(ageOne, ageTwo, ageThree)

	// bits & memory
	var numOne int8 = 25
	var numTwo int8 = -128
	// uint - unsinged int
	var numThree uint8 = 


}
package main

import (
	"fmt"
)

func updateName(x string) string {
	x = "wedge"
	return x
}

func updateMenu(y map[string]float64) {
	y["coffee"] = 2.99
}

func main() {
	// non-pointer types => strings, ints, bools, floats, structs
	name := "tifa"

	name = updateName(name)

	fmt.Println("memory address of name is: ", &name)

	fmt.Println(name)

	// pointer wrapper types => slices, maps, functions
	// menu := map[string]float64{
	// 	"pie":				5.95,
	// 	"ice cream": 	3.99,
	// }

	// updateMenu(menu)
	// fmt.Println(menu)

}
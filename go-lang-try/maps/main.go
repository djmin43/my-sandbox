package main

import "fmt"


func main() {

	menu := map[string]float64{
		"soup": 4.99,
		"pie": 7.99,
		"salad": 6.99,
		"toffee pudding": 3.55,
	}

	fmt.Prinln(menu)
	fmt.Println(menu["soup"])

}
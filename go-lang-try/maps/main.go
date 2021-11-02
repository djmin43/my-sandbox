package main

import "fmt"


func main() {

	menu := map[string]float64{
		"soup": 4.99,
		"pie": 7.99,
		"salad": 6.99,
		"toffee pudding": 3.55,
	}

	fmt.Println(menu)
	fmt.Println(menu["soup"])

	// looping maps
	for key, value := range menu {
		fmt.Println(key, value)
	}

	// ints as key type
	phoneobok := map[int]string{
		12413824214: "James",
		21234891234: "John",
		31238449234: "Robert",
		4123490123: "Michael",
	}
	fmt.Println(phoneobok)
	fmt.Println(phoneobok[21234891234])

	phoneobok[12345678901] = "Mary"
	fmt.Println(phoneobok)

	phoneobok[12345678901] = "yoshi"
	fmt.Println(phoneobok)
}
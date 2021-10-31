package main

import "fmt"

func sayGreeting(name string) {
	fmt.Printf("good morning %v \n", name)
}

func sayBye(name string) {
	fmt.Printf("goodbye %v \n", name)
}

func cycleNames(names []string, f func(string)) {
	for _, value := range names {
		f(value)
	}
}

func main() {
	sayGreeting("luigi")
	sayBye("mario")
	cycleNames([]string{"cloud", "tifa", "barret"}, sayGreeting)
}
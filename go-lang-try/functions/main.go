package main

import (
	"fmt"
	"math"
)

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

func circleArea(r float64) float64 {
	return math.Pi * r * r
}

func main() {
	sayGreeting("luigi")
	sayBye("mario")
	cycleNames([]string{"cloud", "tifa", "barret"}, sayGreeting)

	a1 := circleArea(10.5)
	a2 := circleArea(15)
 
	fmt.Println(a1, a2)
	fmt.Printf("circle 1 is %0.3f and cirlce 2 is %0.3f", a1, a2)
}
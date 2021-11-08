package main

import "fmt"

func main() {
	mybill := newBill("mario's bill")

	mybill.format()

	fmt.Println(mybill)
}
package main

import (
	"fmt"
	"sync"
	"time"

	"github.com/kardianos/service"
)

var (
	serviceIsRunning bool
	programIsRunning bool
	writingSync			sync.Mutex
)

const serviceName = "Medium service"
const serviceDescription = "Simple service, just for fun"

type program struct{}

func (p program) Start(s service.Service) error {
	fmt.Println(s.String() + " started")
	writingSync.Lock()
	serviceIsRunning = true
	writingSync.Unlock()
	go p.run()
	return nil
}

func (p program) Stop(s service.Service) error {
	writingSync.Lock()
	serviceIsRunning = false
	writingSync.Unlock()
	fmt.Println(s.String() + " stopped")
	return nil
}

func (p program) run() {
	for {
		fmt.Println("Service is running")
		time.Sleep(1 * time.Second)
	}
}

func main() {
	serviceConfig := &service.Config{
		Name:						serviceName,
		DisplayName: 		serviceName,
		Description:		serviceDescription,
	}
	prg := &program{}
	s, err := service.New(prg, serviceConfig)
	if err != nil {
		 fmt.Println("Cannot create the service: " + err.Error())
	}
	if err = s.Run(); err != nil {
		fmt.Println("Cannot start the service: " + err.Error())
	}
}
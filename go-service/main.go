package main

import (
	"fmt"

	"github.com/kardianos/service"
)

const serviceName = "Medium service"
const serviceDescription = "Simple service, just for fun"

type program struct{}

func (p program) Start(s service.Service) error {
	panic("implement me")
}

func (p program) Stop(s service.Service) error {
	panic("implment me")
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
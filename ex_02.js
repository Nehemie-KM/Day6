function addCar(secretstring,car) { 
    secret = JSON.parse(secretstring)
    secret.car = car
    return secret
}

const Car = require("./Car");
const Account = require("./Account");

const car = new Car("AW456", new Account("Andres Herrera", "QWE234"));
car.passenger = 4;
car.printDataCar();
import { Order } from "./oop/order.js";
const order = new Order();

const cupSize = document.querySelectorAll(".cup-size");
const topping = document.querySelectorAll(".topping");

order.calculatePriceDefault(cupSize);
order.calculateSize(cupSize);
order.calculateTopping(topping);

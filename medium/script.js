function cutPizzaSlices(x){
    function sharePizza(y){
        var z = x / y
        return `Each person gets ${z} slices of pizza.`
    }
    return sharePizza;
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(4))
console.log(sharePizza(3))
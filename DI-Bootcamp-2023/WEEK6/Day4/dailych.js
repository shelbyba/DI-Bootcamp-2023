let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function
//  named displayGroceries, 
//  that console.logs the 3 fruits from the groceries object. Use the forEach method.
let displayGroceries=()=>{
groceries.fruits.forEach(fruit=>console.log(fruit))
}
displayGroceries()
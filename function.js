function functionName(){
    // write any code here
    //return
    //console.log
}
// call javascript to work
functionName()

function functionName(params){
    // write any code here
    //return
    //console.log
}
// call javascript to work
functionName(arguments)
function addTwoNumbers(){
    let x= 1;
    let y= 2;
    let sum= x+y;
    return(sum);
}
console.log( addTwoNumbers())
function addTwoNumbers(x,y){
    let sum= x+y;
    return(sum);
}
console.log (addTwoNumbers(7,8));
console.log (addTwoNumbers(2,3));
console.log (addTwoNumbers(3,3));
 console.log   (addTwoNumbers(3,7));
 // write a fuction to square any number

 function squareNumber(x){
    return x*x;
 }
console.log(squareNumber(29,6));
console.log(squareNumber(23,67));
console.log(squareNumber(26,7));
console.log(squareNumber(25,78));
console.log(squareNumber(19,90));
//calculating total cost
function calculateTotalCost(quantity,unitPrice){
    const transportFee =5000;
    let subTotalCost = quantity * unitPrice;
    let total = subTotalCost + transportFee;
    return total
}
console.log(calculateTotalCost(2,350000));
  let totalBeforeVat = calculateTotalCost(2,350000);
  function calculatePriceAfterTax(total){
    const vat = 0.18
    let vatFee = total * vat
    let priceAfterTax = total - vatFee
    return {priceAfterTax, vatFee}
  }
  console.log(calculatePriceAfterTax(totalBeforeVat))
,
  function printFullName(){
    let firstName = "Rose",
    lastName = "Desire",
   fullName = firstName + lastName
    return fullName

  }
  console.log(printfullName)

  let actions = [
  function greet(){
    console.log('hello')
  },
  function calculate(){
    console.log(1+1);
  },
  function thankYou(){
    console.log('thank you for using our system')
  }]
  actions[0]();
  actions[1]();
  actions[2]();
  //using functions using object
  let unitPrice
  let quantity
  let productName
  let transportFee
  let vatFee
  let paymethod 
  let calculateTotalCost
  


  let order ={
    unitPrice: 20000000,
    Quantity: 3,
    calculateSubTotal: function(){
        return this.unitPrice * this.quantity
    }
  }
  order.unitPrice
  order.Quantity
  order.calculateSubTotal()

  let car = {
    name: "rangerover",
    weight: 10000,
    stop: function(){
        return 'vroom'
    }

  }
  car.name
  car.weight
  car.start()
  console.log(car.name+ car.weight )




//   📋 Group D: Arrays
// 📚 Team Name: The List Builders
// Members 
// 1.	Rose 
// 2.	Claire 
// 3.	Hana 
// 4.	Jennifer
// 5.	Timothy	📝 Assignment:
// 1.	How to create an empty array
// 2.	How to create an array with values
// 3.	Creating an array using split
// 4.	Accessing array items using index
// 5.	Modifying array element
// 6.	Array Methods 


  
  
const minweight = 18.5
const  maxweight = 24.9


let BMI_Daniel = (a) => {
     if (a < minWeight){
          return "your BMI is " + a +" so you underweight."
     }else if (a >maxWeight && a <= maxWeight) {
          return "your BMI is" + a +", so you have a normal weight."
     }else if (a > maxweight) {
          return "your BMI is " + a + ", so you are overweight"
     }
}
console.log(BMI(100, 10))
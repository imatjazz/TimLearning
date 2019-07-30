// const number = 100
// const string = "Jay1"
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;

 
// function change(number, string, obj1, obj2) {
//     number = number * 10;
//     string = "tim";
//     obj1 = obj2;
    
//     obj2.value = "d";
//     console.log('===============')
//     console.log(number);
//     console.log('string', string);
//     console.log('obj1', obj1);
//     console.log('obj2', obj2)
//     console.log('=================')
//     return {number, string, obj1, obj2}

// }
// console.log('_obj3', obj3);
// change(number, string, obj1, obj2);
// console.log('__obj3', obj3);


// //Guess the outputs here before you run the code: 
// console.log(number); 
// console.log(string);
// console.log('obj1',obj1);
// console.log('obj3',obj3);


const multiplyBy = (num1) =>(num2) =>num1*num2
    

const multiplyBy2 = multiplyBy(2)
const multiplyBy3 = multiplyBy(3)

console.log(multiplyBy2(9))
console.log(multiplyBy3(10))
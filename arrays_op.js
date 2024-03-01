const nums = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log("End 1");
for (let i of nums) {
    console.log(i);
}
console.log("End 2");
nums.forEach((i) => {
    console.log(i);
});
console.log("End 3");

// find the sum of all elements in array

console.log("Element________________");
// let sum=0;
// for(i=0; i<=nums.length; i++){
//     // console.log(i);
//  console.log(nums[i]);
//    sum = sum + nums[i];

// }
// console.log( sum);6

//  create a new array with cube of all aray eleents
console.log('vycbeiy');
let myArr = [];
for (let i of nums) {
    myArr.push(i ** 3);
};
console.log(myArr);
// create a new array and add the element by removs the doller sign and convert to number
const prices = ['$687.35', '$23.4', '$123.35', '$987.652'];



// console.log(parseInt('$687.35'. slice(1)));

const numPrices = [];
prices.forEach((p) => {
    numPrices.push(parseInt(p.slice(1)))
});
console.log(numPrices);


// create a new array cntaining only even number 
const num1 = [23,29,99,32,67,30,41];
const num2 = [];
const num3 = [];
num1.forEach ((x) => {
    if(x%2 == 0){
        num2.push(x);
    }
    else{
        num3.push(x);
    }
})
console.log(num2);
console.log(num3);

// create a new array containng square of each eement of above array 

const num4 =[];
num1.forEach((y) => {
    num4.push(y*y);
})
console.log(num4);

// create a new array with price less than 3000 and greater than 2000
const price1 = [2300,150,5600,2500,900];
const num5 = [];
price1.forEach((z)=>{
    if(z>2000 && z<3000){
        num5.push(z);
    }
}
)
console.log(num5);

// 
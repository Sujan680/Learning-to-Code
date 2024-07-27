console.log("Hello this is react js tuotorial");

// Basic concepts of Js

// first logical && and ||

// let x = 6;
// let y = 5;
// if(x > 3 && y<10){
//     console.log(true);
// }

function getName(name){
    return name
}

let x= true;
let y = false;

console.log( x  && getName('SUJAN'));   //only both value true returns true
// console.log( x  || y);  //both false returns false otherwise returns true


//Template literals
let str1 = "SUJAN";

let str2 = "MAGAR";

console.log(`My name is ${str1} ${str2}`);


//Terniary operator

let showRecipeOne = false;

function getRecipeOneName(recipeName){
    return recipeName
}

function getRecipeTwoName(recipeName){
    return recipeName
}

// if(showRecipeOne){
//     console.log(getRecipeOneName('COKE'));
// }else{
//     console.log(getRecipeTwoName("MOMO"));
// }

// condition ? true : false;

console.log(showRecipeOne ? getRecipeOneName("MOMOS") : getRecipeTwoName("CHOWMIN"));


// Destructuring 

const id = 1;
const productName = "Bread"
const rating = 10;

const products = {
    id,
    productName,
    rating
}
console.log(products);

const users = {
    fname: "sujan",
    lname: 'Magar',
    age: 24,
    address: 'kathmandu'
}

const {fname, lname, address} = users;
console.log(fname);


const array = [1,2,3,4,5,6]

// normal way of accessing value of array

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

//destructuring of array
const [one, two, ...rest] = array;

console.log(rest);

//default parameters

function mul(a=4,b=3){
    return a * b;
}

console.log(mul());


//spread

const array1 = [1,2,3,4]
const array2 = [5,6,7]

console.log([...array1, ...array2]);


// rest operator

function getValues(a,b, ...z){
    console.log(a,z);
     return "sujan";
}
console.log(getValues(1,2,3,4,5,6,));


const personsArr = [
    {
        name:"person 1",
        age: 34,
        country: 'USA'
    },
    {
        name:"person 2",
        age: 26,
        country: 'Canada'
    },
    {
        name:"person 3",
        age: 45,
        country: 'Newzealand'
    },
]
//map methods
let newArr = personsArr.map((item, index) => {
    console.log(index, item);
    return item.name
})
// console.log(newArr);


//filter
console.log('FIlter array methods');
let newArr1 = personsArr.filter((item) =>{
    return item.age > 30 && item.country === 'USA'
})
// console.log(newArr1);


//reduce methods
console.log('Reduce methods');
let newArr3 = personsArr.reduce((acc, item)=> {
    return acc += item.age; 
}, 0)
console.log(newArr3);

let getListOfProducts = document.querySelector(".list-of-products");

function renderListOfProducts(getProducts){
    getListOfProducts.innerHTML = getProducts
    .map((productsItem) =>
        `<p> ${productsItem.title}</p>`
    ).join(" ")
}


async function fetchListOfProducts(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method: "GET"
        })

        const result = await apiResponse.json();
        console.log(result);

        if(result?.products?.length > 0) renderListOfProducts(result?.products)
       
    } catch (error) {
        console.log(error);
    }
}
fetchListOfProducts()
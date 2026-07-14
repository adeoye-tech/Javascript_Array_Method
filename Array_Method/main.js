let fruits = ["apple","banana","orange"];
fruits.push("mango");
console.log(fruits);

let shoppingLists = ["milk","beans","rice","sugar"];
shoppingLists.pop();
console.log(shoppingLists);

let numbers = [10,20,30,40,50];
numbers.shift();
console.log(numbers);

let colors = ["green","blue","white"];
colors.unshift("red");
console.log(colors);

let names = ["adeoye","james","yemi","sunday"];
let result = names.slice(1, 3);
console.log(result);

let cars = ["toyota","benz","audi","lexus"];
cars.splice(1,1);
console.log(cars);

let schools = ["faith","takbir","able","patnaks"];
console.log(schools.length);

let countries = ["nigeria","ghana","kenya","togo"];
console.log(countries.includes("canada"));

let drinks = ["water", "tea","coffee","juice"];
console.log(drinks.indexOf("coffee"));

let scores = [80,90,70,90,100];
console.log(scores.lastIndexOf(90));

let foods = ["rice","beans","yam","plantain"];
console.log(foods.join());

let vehicles = ["car","bus","bike","truck"];
vehicles.reverse();
console.log(vehicles);

let states = ["osun","ekiti","lagos","kwara"];
states.sort();
console.log(states);

let boys = ["tunde","kunle"];
let girls = ["kemi","aisha"];
let students = boys.concat(girls);
console.log(students);

let languages = ["html","css","javascript"];
console.log(languages.toString());

let devices = ["desktop","phone","laptop","tablet"];
console.log(devices.at(2));

let temperatures = [20,24,30,35];
console.log(temperatures.find(temp=>temp>25));

let prices = [500,1200,800,2000];
console.log(prices.filter(price=>price>1000));

let salaries = [50000,60000,70000];
let increased= salaries.map(salary =>salary+5000);
console.log(increased);

let books = ["atomic habits","rich dad poor dad","deep work"];
books.forEach(book=>console.log(book));





for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`(${row}, ${col})`);
  }
}
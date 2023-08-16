//1. Write a JavaScript program to list the properties of a JavaScript object. Sample Output: name,sclass,rollno

const student = { name: "Jocob", sclass: "VI", rollno: 12 };

let Name = student.name;
let Sclass = student.sclass;
let Rollno = student.rollno;
console.warn(Name, Sclass, Rollno);

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
delete student.rollno;

console.warn(student);

//  Write a JavaScript program to get the length of a JavaScript object
let count = 0;
for (let obj in student) {
  count++;
}
console.warn(count);

//Write a JavaScript program to display the reading status of the author: Bill Gates

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
];

console.warn(library[0].author);


// multydymention array of object display the reading status of the author 

const library1 = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: " Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Bill",
    title: "The Road Ahead",
    readingStatus: true,
  },
];

library1.forEach((item)=>console.warn(item.author));


// Add an element to the back of an array.;

let array = [1, 3, 5, 7];

function addElement(arr){
    arr[arr.length]= 7;
    return arr;
}

console.warn(addElement(array));

// ○ Remove an element from the back of an array.

function removeEle(arr){
    if(arr.length >0){
        arr.length = arr.length - 1;
    }
    return arr;
}

console.warn(removeEle(array));


// Add an element to the front of an array.;

function frontEle(arr){
    let newElem = 7;
    for(let i=arr.length;i>0;i--){
        arr[i] = arr[i-1];
    }
    arr[0] = newElem;
    return arr;
}
console.warn(frontEle(array));

// Remove an element from the front of an array.

function removeFront(arr){
for(i=0;i<arr.length-1;i++){
    arr[i] = arr[i+1];
}
arr.length--;
return arr
}

// using shift();

// array.shift(7);

console.warn(removeFront(array));


// Concatenates all the elements in an array into a string.

let myfu = (arr) => {


  let concate = arr.join("");

  // Separates the characters of a string into an array. This one is a string method.

  let saprated = concate.split('');
  console.warn(saprated);

  return concate;
};
console.warn(myfu(array));



// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

let patron = 18;
// If a patron is older than 21, print out "Come on in!".
if (patron == 21) {
  console.warn("Come on in!");
}
//  ● If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
else if (patron >= 18 && patron <= 21) {
  console.warn("Come on in (but no drinking)");
}
// ● If a patron is younger than 18, print out "You're too young to be in here!".
else if (patron <= 18) {
  console.warn("You're too young to be in here!");
}
// ● If a patron is older than 75, print out "Are you sure you want to be here?".
else if ((patron) => 75) {
  console.warn("Are you sure you want to be here?");
}

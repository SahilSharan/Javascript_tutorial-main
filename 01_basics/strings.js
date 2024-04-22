// strings always within double quotes"""

const name= "Sahil"
const repoCount = 50

// console.log(name + repoCount + "value");

// now we will use string manipulation 
console.log('Hello my name is ${name} and my repocount is ${repoCount}');
// sonin string manipulation we can add many things . For example we can say (name.toUpperCase)

const gameName= new String('Sahil')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

// Now we use trim in js 
 const jabbax = "    Hello Sahil    "

 console.log(jabbax);
 console.log(jabbax.trim);
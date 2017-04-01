var names = ['Danny', 'Anmol','Sid'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// // am I using an anonymous functoion ==> use arrow function
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('New Stuff');
// });
//
// //when one thing, no need for curly bracers
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + "!";
//
// console.log(returnMe('Danny'));

// var person = {
//   name: 'Danny',
//   greet : function (){
//     names.forEach(function(name){
//       console.log(this.name + ' says hello to ' + name)
//     });
//   }
//
// };

var person = {
  name: 'Danny',
  greet: function (){
    names.forEach((name) =>{
      console.log(this.name + ' says hello to ' + name)
    });
  }
}

person.greet();



// challenge

function add( a, b){
  return a+b;
}

// addStatement with bracers

var addStatement = (a,b) => {
  return a+b;
}



// addExpression wit expression syntax

var addExpression  = (a,b) => a+b;


console.log(addExpression(1,2));
console.log(add(0,9));

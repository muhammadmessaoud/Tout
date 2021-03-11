/*let expr = "toto";

let obj = {
  bidule: "truc",
  set [expr](v) { this.bidule = v; }
};

console.log(obj.bidule); // "truc"
obj.toto = "machin";      // le mutateur est utilisé
console.log(obj.bidule);
*/

const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname,person1.lastname);
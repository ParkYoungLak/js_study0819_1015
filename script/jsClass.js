function Car(){
  let name='qm6';
  this.carName = 'qm6';
}
console.log(Car);
console.log(Car.prototype);
console.log(new Car()); //copy
console.log(Object.create(Car));

function Person(){
  this.fullName = "박영락";
  this.callName = function(){
    console.log("안녕"+this.fullName);
  }
}
Person.callName2=function(){
  console.log("안녕"+this.fullName);
}
//Person.callName();
Person.callName2();
let callName2=Person.callName2.bind(new Person);

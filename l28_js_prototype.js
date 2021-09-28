console.log({});
function Car(){
    this.n="qm6";
    this.move=function(){
      console.log("움직여라 차야")
    }
}
Car.prototype.move2=function(){};
console.log(Car);
console.log(Car.prototype);
//함수에 선언된 멤버를 사용하려면 함수를 객체로 생성해야한다.
//new연산자를 선언하면 car함수를 복사해서 새로운 prototype을 생성.
const car = new Car();
console.log(car.move())
console.log(car); //새롭게 생성된 객체의 프로토타입.
car.move2();
console.log(car.__proto__); //설계도가 되는 부모의 Car.prototype
car.__proto__.move2();
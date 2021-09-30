const a= new Object();
a.name="Dd";
const literal_a={name:"Dd"};
const func_a=function(){this.name="Dd"}
class ClassA{name="Dd"};

console.group("객체생성 4가지 방법");
console.log(a);
console.log(literal_a);
console.log(new func_a());
console.log(new ClassA());
console.groupEnd();

class Parent{
  constructor(a){
      this.a=a;
  }
  b(){return "bbb"};
}
class Child extends Parent{
  constructor(a){
      super(a);  //자식은 부모의 생성자를 물려받아야함.
  }
}
console.log(Child);

console.group("클래스의 상속")
console.log("Child.prototype", Child.prototype);
console.log("Child.__proto__",Child.__proto__);
console.log("Child.__proto__",Child.__proto__.__proto__);
console.log("Child.__proto__",Child.__proto__.__proto__.__proto__);
console.groupEnd();

const child=new Child()
console.group("클래스의 상속 new Child()")
console.log("child.prototype", child.prototype);
console.log("child.__proto__",child.__proto__);
console.log("child.__proto__",child.__proto__.__proto__);
console.log("child.__proto__",child.__proto__.__proto__.__proto__);
console.groupEnd();

const parentObj= 
{
  parent:"부모",
  //parentCall(){}
  parentCall:function(){"부모 왜 불러"}
  };
const childObj= {child:"자식"};
childObj.__proto__=parentObj;
parentObj.parent="부모값변경됨";
console.group("childObj.__proto__=parentObj : 원시적상속")
console.log(childObj);
console.log(childObj.__proto__);
console.groupEnd();

const childObj2= Object.create(parentObj);
childObj2.child = "두번째자식";
parentObj.parent = "부모값2번째변경";
console.log(childObj2);
console.log(childObj2.__proto__);

function FuncParent(){
    this.a="aa";
    this.b=function(){return "bb"};
}
FuncParent.prototype.c= function(){return "cc"}; //prototype에 함수넣기.
FuncParent.prototype.o = "ㅇㅇ"; //prototype에 변수선언가능.

const func_child= Object.create(FuncParent);
console.log(func_child)
console.log(func_child.prototype)
console.log(func_child.__proto__)       

const assign_func=Object.assign(FuncParent);
FuncParent.prototype.d = "dd";
console.log(assign_func);
console.log(assign_func.prototype);
//깊은복사가 되지않는다. prototype은 복사한 대상과 동일한 프로토타입을 참조한다.
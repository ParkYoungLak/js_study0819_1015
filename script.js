const tdList = document.querySelectorAll("#calendarTable td");
//td에 마우스를 올리면 .schedule 의 상태를 보이게 바꾼다. mouseover
//마우스가 td에서 나가면 .schedule 을 보이지 않게 한다.  mouseleave  
// 상기 2개를 합치면 hover 는 js에서 구현 X.
//onmouseover/mouseout : 자식 요소에 이벤트를 전달.
//mouseenter : 이벤트 전달을 하지 않는다.
//화살표 함수는 this 를 최상위 부모인 window로 받는다. (블럭을 무시)
console.log(tdList)
  tdList.forEach((td)=>{

  })
  for(td of tdList){
    td.onmouseenter  = function(event){
      event.target.querySelector(".schedule").style.visibility="visible";
    }
    td.addEventListener("mouseleave",function(event){
    event.target.querySelector(".schedule").style.visibility="hidden";
  })
  }  
  
  //9월의 마지막일 
  

  //날짜뿌리기
let lastDay = new Date(2021,9,0).getDate();
  //9월의 시작하는 요일 
  let firstDay = new Date(2021,8,1).getDay();
  //let a=1,b=2 이런 식으로 선언 가능.

let nextMonth = firstDay + lastDay
let lastMonth = new Date(2021,8,0).getDate();  
let toDay = new Date();
//let date = new Date();
let thisMonth = toDay.getMonth();

 //날짜뿌리기
  function DateBringer(){
  for(let i=firstDay,d=1;i<lastDay+firstDay;i++){
    tdList[i].querySelector(".day").innerText= d++;
        tdList[i].style.color= "rgb(130,130,130)"
        tdList[i].classList.add("add");

    //console.log(tdList[i].querySelector(".day").classList)
    //emlment.classList("") 복수로 지정된 클래스를 배열로 받아온다.
    //classList.add("") 클래스를 더한다.
    //classList.remove("") 클래스를 지운다.
    //classList.toggle("") 클래스를 있으면 삭제하고 없으면 더한다.
  };
  for(i=firstDay-1; i>=0;i--){
    tdList[i].querySelector(".day").innerText =lastMonth--;
    tdList[i].classList.add("disabled");
  };
  
  for(let i=nextMonth,num=1;i<=tdList.length-1;i++){
    tdList[i].querySelector(".day").innerText = num++;
    tdList[i].classList.add("disabled");

  };
}

  function prevMon(){
    console.log("!!") 
    //DateBringer()
    
    let lastDay = new Date(2021,thisMonth,0).getDate();
    let firstDay = new Date(2021,thisMonth-1).getDay();
    for(let i=firstDay,d=1;i<lastDay+firstDay;i++){
    tdList[i].querySelector(".day").innerText= d++;
  };
    console.log("##");
  }
  function nextMon(){
    console.log("!!")
    //DateBringer
    let lastDay = new Date(2021,thisMonth+1,0).getDate();
    let firstDay = new Date(2021,thisMonth+1).getDay();
    for(let i=firstDay,d=1;i<lastDay+firstDay;i++){
    tdList[i].querySelector(".day").innerText= d++;
  };
     console.log("##");
  }
  

  DateBringer()
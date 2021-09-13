//데이터베이스 서버와 통신해서 9/10 일 할일 목록을 받았다.
const d_09_10=["aaa","bbb","ccc","ddd"];
const displaySection = document.getElementById('dp'); //입력된 메세지가 표시되는곳
const inputMessage = document.getElementById('inputHere'); //입력받는곳
const inputBtn = document.querySelector("button");
const delBtn = document.getElementsByClassName("delete");
schedulePrint(); //호이스팅

// 스케줄 추가버튼을 누르면 데이터베이스 서버에 insert를 하고
// insert된 리스트를 출력받는다. => 기존의 list에 값을 추가하는 것으로 대체.

function addScedule(){

}
//리스트에 삭제 버튼을 누르면 데이터베이스 서버에서 삭제하고 다시 리스트를 받는다.
//기존의 리스트를 삭제하는 것으로 대신..



function schedulePrint(){
let scheduleLihtml= '';
//+=<li>aaa</li>
//+=<li>bbb</li>

d_09_10.forEach((item,i)=>{
  scheduleLihtml+=`<li>${i+1}번째: ${item}</li>`      
});
console.log(scheduleLihtml)
const ul_Schedule=document.querySelector("#memo ul.schedule");
ul_Schedule.innerHTML = scheduleLihtml;
}

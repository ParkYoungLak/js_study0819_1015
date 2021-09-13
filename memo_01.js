//데어터베이스 서버와 통신해서 9월 10일 할 일 목록을 받아서 출력.
const d_09_10=["aaa","bbb","cccc","dddd"];
schedulePrint();

function schedulePrint(){
  let scheduleLiHtml="";
  //+=<li>aaa</li>
  //+=<li>bbb</li>

  d_09_10.forEach((item, i) => {
    scheduleLiHtml+=`<li>${i}:${item}</li>`;
  });
  //console.log(scheduleLiHtml);
  const ulSchedule=document.querySelector("#memo ul.schedule");
  ulSchedule.innerHTML=scheduleLiHtml;
}
//스케줄추가버튼을 누르면 데이터베이스 서버에 insert를 하고 다시 리스트를 받는다.
//=> 기존의 list에 값을 추가하는 것으로 대신한다


//리스트에 삭제 버튼을 누르면 데이터베이스 서버에 delete를 하고 다시 리스트를 받는다
//=> 기존의 list에 값을 삭제 하는 것으로 대신한다

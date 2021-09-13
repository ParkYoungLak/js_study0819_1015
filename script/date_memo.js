"use static"
///데이터 베이스에서 받아온 데이터베이스
//시간은 => 분, 07:10 => 60*7+10=430
//18
const d_09=
  {
    13:{
      430:"기상",
      450:"에이콘아카데미 출근",
      1080: "퇴근",
      1170: "집 도착",
      1328: "취침"
    },
    14:{
      430:"기상",
      450:"에이콘아카데미 출근",
      1080: "퇴근",
      1170: "집 도착",
      1328: "취침"
    }
}

const d_0913={
  430:"기상",
  450:"에이콘아카데미 출근",
  1080: "퇴근",
  1170: "집 도착",
  1328: "취침"
}
//delete d_0913[1080]; //json 삭제법
//const d_0914={...d_0913 , 1200: "저녁식사"} // json 복제법
//console.log(431 in d_0913); //in 은 key가 오브젝트에 있는지 검사
printScheldule();
function printScheldule(){
  let li_html="";
  for(key in d_0913){
    li_html+="<li>"
    //li_html+=(Number.parseInt(key/60)<10)?"0"+Number.parseInt(key/60):Number.parseInt(key/60);
    //li_html+=":"+( (key%60<10)?"0"+key%60:key%60 );
    li_html+="<b class='time'>"
    li_html+=(Number.parseInt(key/60)+"").padStart(2,0);
    li_html+=":"+(key%60+"").padStart(2,0);
    li_html+="</b>"
    li_html+="<span>"
    li_html+=d_0913[key];
    li_html+="</span>"
    li_html+="<button class='delete' value='"+key+"' onclick='deleteScheldule(event)'>"
    li_html+="x"
    li_html+="</button>"
    li_html+="</li>"
  }
  document.querySelector("#memo > div > ul.schedule").innerHTML=li_html;
}
function arrValNum(arr){
  arr.forEach((item,i)=>{
    arr[i]=Number(item);
  })
  return arr;
}
document.forms.insertSchedule.regist.onclick=function(event){
  let regist_form=event.target.form;
  let text_val=regist_form.registText.value;
  let time_val_arr=regist_form.registTime.value.split(":");//Number(["10","20"]) x
  time_val_arr=arrValNum(time_val_arr);
  //9:10 => 9*60+10
  let regist_time= time_val_arr[0]*60+time_val_arr[1];
  d_0913[regist_time]=text_val;
  printScheldule();
}
//브라저우에 개체가 로드 될때 한번 재정의 한다.
// document.querySelectorAll("#memo ul.schedule li .delete").forEach(function(item){
//   item.onclick=deleteScheldule;
// });

function deleteScheldule(event){
 delete d_0913[Number(event.target.value)];
 printScheldule();
}





///ddd

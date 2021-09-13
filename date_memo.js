//데어터베이스에서 받아온 데이터베이스
//시간은 분, 07:10 => 60*7+10 = 430
const d_09={
    13:{
        430: "기상",
        450: "출근",
        1080: "퇴근",
        1170: "귀가",
        1320: "취침"
    },
    14: {
        430: "기상",
        450: "출근",
        1080: "퇴근",
        1170: "귀가",
        1320: "취침"
    }
    
};

const d_0913={
  430: "기상",
  450: "출근",
  1080: "퇴근",
  1170: "귀가",
  1320: "취침"
    };
//console.log(431 in d_0913);
let li_html='';

for(key in d_0913){
  console.log(key)
  li_html+="<li>";   
  li_html+= key+":"+d_0913[key];
  li_html += "</li>";
}

/*
schedulePrint();

function schedulePrint() {
    let scheduleLiHtml = "";
    //+=<li>aaa</li>
    //+=<li>bbb</li>
    const del_val = { index: 0 };

    d_09_10.forEach((item, i) => {

        del_val.index = i;
        console.log(del_val.index)
        scheduleLiHtml += `<li>`;
        scheduleLiHtml += `${item}`;
        scheduleLiHtml += `<button class='delete' value='${JSON.stringify(del_val)}' onclick='deleteSchedule(event)'> x </button>`;
        scheduleLiHtml += `</li>`;
    });
    //console.log(scheduleLiHtml);
    const ulSchedule = document.querySelector("#memo ul.schedule");
    ulSchedule.innerHTML = scheduleLiHtml;
}
//스케줄추가버튼을 누르면 데이터베이스 서버에 insert를 하고 다시 리스트를 받는다.
//=> 기존의 list에 값을 추가하는 것으로 대신한다


//리스트에 삭제 버튼을 누르면 데이터베이스 서버에 delete를 하고 다시 리스트를 받는다
//=> 기존의 list에 값을 삭제 하는 것으로 대신한다
function deleteSchedule(e) {
    let deleteIndexObject = JSON.parse(e.target.value);

    d_09_10.splice(deleteIndexObject.index, 1);
    schedulePrint();
}

const scheduleForm = document.forms["insertSchedule"];
const scheduleRegist = document.forms["insertSchedule"]["registBtn"];
//노드개체를 참조하는 변수는 상수로 참조
//노드개체의 속성 값은 let 변수로 참조.

scheduleRegist.addEventListener("click", function () {
    //inputNode.value type= string
    let insert_index = Number(scheduleForm["index"].value);
    let insert_text = scheduleForm["text"].value;
    d_09_10.splice(insert_index, 0, insert_text);
    schedulePrint();
})
*/ 

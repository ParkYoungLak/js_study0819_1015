//request : 통신용어로 특정페이지(url)를 요청(GET)하는 행위
//response : 요청한 페이지를 받아오는 행위

//XMLHttpRequest : 자바스크립트에서 특정페이지를 비동기식으로 요청할때 사용하는 객체
//XMLHttpRequest.responseText : 요청한 페이지의 본문
console.log(loadRoot);
loadRoot.onclick=function(){
    const   req= new XMLHttpRequest();
    const   url="load_body.html";
    const   method="GET";
    req.open(method,url);

    req.onreadystatechange=function(){
        if(req.readyState===XMLHttpRequest.DONE){
            console.log("onreadystatechange");
            console.log(req.status);
            if(req.status===200){
                console.log(req.response); 
                printRoot.innerHTML=req.response;
            }else if(req.status===404){
                printRoot.innerHTML=
                `<h2 style="color:red">${req.status} 페이지가 없습니다.</h2>`
            }
        }

    }

    req.send();
}


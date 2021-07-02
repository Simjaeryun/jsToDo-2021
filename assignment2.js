const body = document.querySelector("body");
const newTitle = document.createElement("h1");
body.appendChild(newTitle);
const title = body.querySelector("h1");

function handleResize(){
    const innerWidth = window.innerWidth;
    const bodyColor = body.style.backgroundColor = title.innerHTML;
    if(innerWidth > 600 && innerWidth < 800){
        bodyColor;    
        title.innerHTML = "Yellow";
    }else if(innerWidth > 800 && innerWidth < 1000){
        bodyColor;   
        title.innerHTML = "Skyblue";
    }else if(innerWidth > 1000){
        bodyColor;   
        title.innerHTML = "Peru";
    }
}


//inner width를 함수안에 넣으면 resize가 실행될떄마다 값이 바뀐다.
//inner width를 함수밖에 두면 resize가 실행되도 값은 변함이없다. 


window.addEventListener("resize",handleResize);
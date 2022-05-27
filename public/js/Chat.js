var coll = document.getElementsByClassName('collapsible');

// 챗봇 클릭하면 떠오르게.
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
/*
// 챗봇 시작할 때 시간 받아서 출력.
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours //7시의 경우 07시로 표시
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}
*/

// 시작 메시지
/*
function firstBotMessage(){
    let firstMessage = "안녕하세요! 지원하는 명령어는 '!명령어'를 입력하시면 됩니다"
    document.getElementById("botStarterMessage").innerHTML = "<p class='botText'><span>" + firstMessage + '</span></p>';

    let time = getTime();
    
    $('#chat-timestamp').append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();
*/
//대답
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHTML = `<div class="botText"><span>${botResponse}</span></div><p></p>`;
    $ ("#chatbox").append(botHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//응답 얻기
function getResponse() {
    let userText = $("#textInput").val();
    
    if(userText == "") {
        userText = "질문을 다시해주세요.";
    }

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout (() => {
        getHardResponse(userText);
    }, 1000)
}

//메시지 전달
function sendButton() {
    getResponse();
}

//도움말
function heartButton() {
    buttonSendText("임시")
}

//menuButton = 메뉴
function menuButton() {
    getHardResponse(`menu`);
}

//kkButton = 교육과정
function kkButton() {
    getHardResponse(`교육과정`);
}
//hakjumButton = 남은학점
function hakjumButton() {
    getHardResponse(`졸업학점`);
}

//enter 키 눌러 메시지 보내기
$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getResponse();
    }
})


//scheduleButton = 일정
function scheduleButton() {
    getHardResponse(`달력선택`);
}
function maButton() {
    selectMonth(1);
    getHardResponse(`학사일정`);
}
function mbButton() {
    selectMonth(2);
    getHardResponse(`학사일정`);
}
function mcButton() {
    selectMonth(3);
    getHardResponse(`학사일정`);
}
function mdButton() {
    selectMonth(4);
    getHardResponse(`학사일정`);
}
function meButton() {
    selectMonth(5);
    getHardResponse(`학사일정`);
}
function mfButton() {
    selectMonth(6);
    getHardResponse(`학사일정`);
}
function mgButton() {
    selectMonth(7);
    getHardResponse(`학사일정`);
}
function mhButton() {
    selectMonth(8);
    getHardResponse(`학사일정`);
}
function miButton() {
    selectMonth(9);
    getHardResponse(`학사일정`);
}
function mjButton() {
    selectMonth(10);
    getHardResponse(`학사일정`);
}
function mkButton() {
    selectMonth(11);
    getHardResponse(`학사일정`);
}
function mlButton() {
    selectMonth(12);
    getHardResponse(`학사일정`);
}
function calenderButton() {
    window.open("https://www.cku.ac.kr/cku/428/subview.do","학사일정");
}

function iljung(monthSelect) {
    if(monthSelect == 1) {
        maButton();
    }
    else if(monthSelect == 2) {
        mbButton();
    }
    else if(monthSelect == 3) {
        mcButton();
    }
    else if(monthSelect == 4) {
        mdButton();
    }
    else if(monthSelect == 5) {
        meButton();
    }
    else if(monthSelect == 6) {
        mfButton();
    }
    else if(monthSelect == 7) {
        mgButton();
    }
    else if(monthSelect == 8) {
        mhButton();
    }
    else if(monthSelect == 9) {
        miButton();
    }
    else if(monthSelect == 10) {
        mjButton();
    }
    else if(monthSelect == 11) {
        mkButton();
    }
    else if(monthSelect == 12) {
        mlButton();
    }
}
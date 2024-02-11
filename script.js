// 랜덤번호 지정
// 유저가 번호 입력 & go 라는 버튼 누름
// 유저가 랜덤번호 맞추면, 맞췄습니다! 알림
// 랜덤번호 < 유저  down! 알림
// 랜덤번호 > 유저  up! 알림
// reset 버튼 누르면 게임이 리셋됨
// 5번의 기회를 다 쓰면 게임 종료. (버튼 비활성화)
// 유저가 범위 밖의 숫자를 입력하면 알려주고, 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area")

function randomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;   // Math.random() : 0~1 사이의 숫자 반환, Math.floor() : 소수점자리 버리기
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value
    
    if(userValue<=0 || userValue>100){
        resultArea.textContent = "다시 입력하세요."
    }
    else{
        if(userValue < computerNum){
            resultArea.textContent = "up!!"
        }
        else if(userValue > computerNum){
            resultArea.textContent = "down!!"
        }
        else{
            resultArea.textContent = "맞췄습니다!!!!"
        }
    }
}

randomNum();
playButton.addEventListener("click", play);
// 함수를 매개변수처럼 사용. 이렇게 매개변수처럼 사용할 때는 ()를 빼고 써야함. ()까지 쓰면 함수가 무조건 실행됨.
// 의도처럼 click 이벤트가 발생했을 때만 사용하고 싶으면 이와같이 변수처럼 사용하기!!!!!!! 중요!!!!!
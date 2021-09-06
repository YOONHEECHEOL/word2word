const number = parseInt(prompt('몇 명이 참가하나요?'), 10)
// prompt 창에 입력하는 글자 = 문자열로 받으므로 parseInt를 통해 정수로 변경, parseInt(값, 10진법)
// alert - 경고창
// confirm - yes/no 를 선택하는 창 , const yesOrNo = confirm('맞나요?')

// document.querySelector() 선택자
// document.querySelectorAll() 여러가지 요소 선택 시

const $order = document.querySelector('#order');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const $word = document.querySelector('#word');
let word; // 제시어 저장할 변수 선언
let newWord; // 새로 입력한 단어

const onClickBtn = () => {
  if (!word || word[word.length - 1] === newWord[0]) { // 제시어가 비었는가?
    // 비어있음 || 단어의 끝말을 이은 단어임
    word = newWord; // 입력한 단어가 제시어가 된다
    $word.textContent = word; // 화면에 내용 출력    
    const order = parseInt($order.textContent); // 현재순서
    if (order + 1 > number) { // order 값이 number 보다 크다 => 참가인원보다 큰 수가 입력됨 => 다시 1번째 참가자의 순서!
      $order.textContent = 1;
    } else {
      // order 값이 number 보다 작다 => 다음 참가자의 순서
      $order.textContent = parseInt(order + 1);
    }
  } else {
    // 비어있지 않음 || 단어의 끝말을 이은 단어가 아님

    // 입력한 단어가 올바르지 않다 (끝말을 잇지 않음)
    alert('올바르지 않은 단어입니다.');
    input.value = '';
    input.focus();
  }
  input.value = '';
  input.focus();
};

const onInput = (event) => {
  newWord = event.target.value;
}

btn.addEventListener('click', onClickBtn);
input.addEventListener('input', onInput);

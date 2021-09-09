const number = parseInt(prompt('총 몇명의 플레이어가 참가하나요?'))
console.log('입력받은 플레이어 수 : ', number)
const word = document.querySelector('#word'); // 제시어
const inputText = document.querySelector('input') // 입력된 단어
const inputBtn = document.querySelector('button') // 입력 버튼
const guideWord = String(word.textContent)
let newWord; // 새로입력한 단어


function lengthCheck(input) { // 글자 길이 체크
  const checkWord = String(input)
  if (checkWord.length === 3) {
    return true;
  } else {
    alert('글자 수가 맞지않습니다! 3글자를 맞춰주세요!')
  }
}
// console.log(lengthCheck(word))

function wordCheck(input) { // 끝말잇기 체크
  const checkWord = String(input)

  if (checkWord[0] === word.textContent[2]) {
    let inputWord = word.textContent
    console.log('word : ', inputWord)
    return true;
  } else {
    let inputWord = word.textContent
    console.log('word : ', inputWord)
    alert('끝말이 이어지지 않습니다!')
  }
}

function clear() {
  inputText.value = '';
  inputText.focus();
}

// console.log(wordCheck('실타래'));

// 1. 제시어가 비어있음?
// 2. 검증1 - 입력한 단어의 글자 수 체크 (3글자)
// 3. 검증2 - 입력한 단어가 끝말잇기가 되었는지 체크
const onInput = (event) => {
  newWord = event.target.value
}

const onClickBtn = () => {
  if (!word.textContent) { // 제시어가 비어있음    
    if (lengthCheck(newWord)) {
      console.log(newWord);
      word.textContent = newWord;
      clear();
    } else {
      alert('제시어 채우기!')
    }
  } else { // 제시어가 비어있지 않음
    if (lengthCheck(newWord) && wordCheck(newWord)) {
      word.textContent = newWord
      clear();
    } else {
      clear();
    }
  }
}

inputBtn.addEventListener('click', onClickBtn)
inputText.addEventListener('input', onInput)
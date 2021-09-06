const number = parseInt(prompt('총 몇명의 플레이어가 참가하나요?'))
console.log('입력받은 플레이어 수 : ', number)

const list = document.querySelector('.list');
const order = document.querySelector('#order');
const start = document.querySelector('.start');
const word = document.querySelector('#word');
let input = document.querySelector('input');

function insertWord() {
  word.textContent = input.textContent;
  input.textContent = '';
}

if (!word) {

} else {

}
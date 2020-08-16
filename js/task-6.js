// let inputUser;
let total = 0;

let inputUser;

do{
  inputUser = prompt('Please, input any number', '');
  total += Number(inputUser);
}while (inputUser !== null)

alert (`total sum is ${total}`);
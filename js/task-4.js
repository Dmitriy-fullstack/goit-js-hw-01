const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; 
let balanceCredit = credits - totalPrice; 
let message;


if (totalPrice > credits) {
message = ACCESS_DENIED
} else {
message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`}
if (orderPieces === null) {
message = CANCELED_BY_USER}

console.log(message);
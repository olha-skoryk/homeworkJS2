//Створити функцію, яка буде знаходити найменьше з двох чисел

const num = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } 
  return num2;
}

num(4,8);

//Створити функцію, яка буде отимувати вік людини і казати, повнолітня вона, чи ні

const isAdult = function(age) {
  if (typeof age !== 'number' || isNaN(age)) {
    return null;
  }
  if (age >= 18){
    return true;
  } else {
    return false;
  }
}

isAdult(18);

//Створити функцію - калькулятор, яка буде приймати два числа та оператор (+, -, /, *) і буде повертати результат вказаної операції над числами. Зробити варіант або на if...else або на switch...case
  
const calculator = function (num1, oper, num2) {
  // switch (oper) {
  //   case '+': {
  //     return (num1 + num2);
  //     break; 
  //   } 
  //   case '-': {
  //     return (num1 - num2);
  //     break;
  //   }
  //   case '/': {
  //     return (num1 / num2);
  //     break;
  //   }
  //   case '*': {
  //     return (num1 * num2);
  //     break;
  //   }
  //   default: {
  //     return ('Рішення немає');
  //     break; 
  //   }
  // }
  if (oper === '+') {
    return (num1 + num2);
  } else if (oper === '-') {
    return (num1 - num2);
  } else if (oper === '/') {
    return (num1 / num2);
  } else if (oper === '*') {
    return (num1 * num2);
  } else {
    return('Рішення немає');
  }
}

calculator(2, '+', 5);

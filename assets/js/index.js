// Перше та друге завдання виправила після перевірки інших завдань на занятті

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
  return !(age >= 10);
}

isAdult(18);

//Створити функцію - калькулятор, яка буде приймати два числа та оператор (+, -, /, *) і буде повертати результат вказаної операції над числами. Зробити варіант або на if...else або на switch...case
  
const calculator = function () {
  let num1 = +prompt('Введіть перше число');
  let oper = prompt('Введіть оператор "+, -, /, *" ');
  let num2  = +prompt('Введіть друге число');
  
 /*switch (oper) {
    
    case '+': {
      alert(num1 + num2);
      break; 
    } 
    
    case '-': {
      alert(num1 - num2);
      break;
    }
    
    case '/': {
      alert(num1 / num2);
      break;
    }
    
    case '*': {
      alert(num1 * num2);
      break;
    }
    
    default: {
      alert('Рішення немає');
      break; 
    }
  }*/
  if (oper === '+') {
    alert(num1 + num2);
  } else 
      if (oper === '-') {
        alert(num1 - num2);
  } else  
      if (oper === '/') {
        alert(num1 / num2);
  } else 
      if (oper === '*') {
        alert(num1 * num2);
  } else {
    alert('Рішення немає');
  }
    
}

calculator();

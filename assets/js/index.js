//Створити функцію, яка буде знаходити найменьше з двох чисел

let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');

if (num1 > num2) {
  alert('Перше число більше ніж друге');
} else if (num1 < num2) {
  alert('Друге число більше ніж перше');
} else if (num1 === num2) {
  alert('Числа рівні');
}

//Створити функцію, яка буде отимувати вік людини і казати, повнолітня вона, чи ні

let age = +prompt('Введіть Ваш вік');

if (age >= 18) {
  alert('Людина повнолітня');
} 
if (age < 18) {
  alert('Людина не повнолітня');
} else {
  alert('Значення не валідне');
}

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

//Bonus Level

//Зробити перевірки у функціях для запобігання виконання розрахунків з некоректними даними. (наприклад замість числа передавати null і т.д)
//Для завдання калькулятора зробити дві функції, з варантом і на  if...else і на switch...case
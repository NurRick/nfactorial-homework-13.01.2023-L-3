// Task 1:Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли. 

// alert('Hello user');

// const userName = prompt('What is your name?','Write your name')
// console.log(userName);

// let userAdult = confirm('Are you over 18?');
// console.log(userAdult);

// let userJoke = confirm('Твоя мама знает что ты балуешся с JS?');
// console.log(userJoke);

// const userAge = prompt('So, how old are you?','Write your age')
// console.log(userAge);

// const userGender = prompt('Are you a man or a woman?', 'Write your gender')
// console.log(userGender);

// Task 2:Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в aler.

// const number = prompt('Когда произошла Ангорская битва между Османским султаном Баязидом I и эмиром Тимуром (Тамерланом)','Напиши год');
// if(number == 1402){
//     alert('Верно');
// } else {
//     alert('Не верно. Ангорская битва произошла 20 июля 1402 года близ Ангоры (ныне Анкара)')
// }

// Task 3: Перепишите этот блок кода с использованием оператора switch.

// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch (a) {
//     case 0: 
//         alert ( 0 ); 
//         break;
//     case a == 1: 
//         alert( 1 ); 
//         break;
//     case a == 2 || a == 3:
//          alert( '2, 3' ); 
//          break;     
// }

// Task 4: Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let summ = 0;
for (let i = 1; i <= 101; i++) {
    if (i % 2 == 0) {
        summ+=i   
    } 
}
console.log('Cумма всех четных чисел в промежутке 1-100:', summ)

// Task 5: Перепишите цикл for на while.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let b = 0;
// while (b < 3) {
//     alert( `number ${b}!` );
//     b++
// }
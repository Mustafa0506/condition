// // 1

// let name = 'alex'
// let account = 7777
// let balance = 10000

// let a = prompt('Как вас зовут?')

// if (a.toLowerCase() === 'alex') {

//     let b = +prompt('Введите код')
//     if (b === 7777) {
//         let c = prompt('Сколько обналичить?')
//         if (c <= balance) {
//             alert(`ваш баланс ${balance - c}`)
//         } else {
//             alert(`Не достаточно  ${balance - c}`)
//         }
//     } else {
//         alert('Пользователь не найден, досвидули')
//     }
// } else {
//     alert('Пользователь не найден, досвидули')
// }




// 2

let namePermition = prompt('Введите свое имя')
let value = 10

if (namePermition[0].toLowerCase().trim() === 'a') {
    let age = prompt('Сколько вам лет?')
    if (age >= 20 && age <= 40) {
        let howMoney = +prompt('Сколько денег у тебя есть?')
        if (howMoney >= 100) {
            let quantity = prompt('Сколько вас?')
            if (quantity <= value) {
                alert('Добро пожаловать')
            } else {
                alert('Простите, кто-то должен уйти')
            }
        } else {
            alert('У Вас не достаточно средст')
        }
    } else {
        alert('Ваш возрастне подходит')
    }
} else {
    alert('Вы не были преглошины')
}
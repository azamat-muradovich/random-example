function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}




let userName = prompt('Ismingizni kiriting')
let userAge = +prompt('Yoshingizni kiriting')
let prCount = +prompt('Nechta misol echmoqchisiz?')
let minNum = +prompt('Minimal son')
let maxNum = +prompt('Maximal')

for (let i = 0; i < prCount; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let symbol = random(1, 5)

    if (symbol == 1) {
        symbol = '+'
        let pr = +prompt('Misolni yeching: ' + num1 + symbol + num2)
        let answer = num1 + num2 == pr ? 'javobingiz togri' : 'Javobingiz notogri'
        alert(num1 + symbol + num2 + ' =' + (num1 + num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    } else if (symbol == 2) {
        symbol = '-'
        let pr = +prompt('Misolni yeching: ' + num1 + symbol + num2)
        let answer = num1 - num2 == pr ? 'javobingiz togri' : 'Javobingiz notogri'
        alert(num1 + symbol + num2 + ' =' + (num1 - num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    } else if (symbol == 3) {
        symbol = '*'
        let pr = +prompt('Misolni yeching: ' + num1 + symbol + num2)
        let answer = num1 * num2 == pr ? 'javobingiz togri' : 'Javobingiz notogri'
        alert(num1 + symbol + num2 + ' =' + (num1 * num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    } else if (symbol == 4) {
        symbol = '/'
        let pr = +prompt('Misolni yeching: ' + num1 + symbol + num2)
        let answer = num1 / num2 == pr ? 'javobingiz togri' : 'Javobingiz notogri'
        alert(num1 + symbol + num2 + ' =' + (num1 / num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    } else if (symbol == 5) {
        symbol = '%'
        let pr = +prompt('Misolni yeching: ' + num1 + symbol + num2)
        let answer = num1 / num2 == pr ? 'javobingiz togri' : 'Javobingiz notogri'
        alert(num1 + symbol + num2 + ' =' + (num1 % num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    }
}

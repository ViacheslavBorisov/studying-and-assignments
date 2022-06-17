const numFact = 3
console.log('Вычисляем факториал числа: ', numFact)


let f = 1;
const fact = (size) => {
    if (size <= numFact) {
        f = f * size
        size++
        return fact(size)
    } else {
        return f
    }
}

console.log('Фактериал числа: ', numFact, 'равен: ', fact(2))
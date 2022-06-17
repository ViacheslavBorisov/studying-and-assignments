const numFact = 5
console.log('Вычисляем факториал числа: ', numFact)

let f = numFact;
if (numFact == 0) {
    f = 1
} else {
for (let i = 1; i < numFact; i++) {
    f = f*(numFact - i)
    }
}

console.log('Фактериал числа: ', numFact, 'равен: ', f)
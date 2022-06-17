const numFact = 5
console.log('Вычисляем факториал числа: ', numFact)

let f = 1;
for (let i=1; i < numFact; i++) {
   f = f*(i+1)    
}

console.log('Фактериал числа: ', numFact, 'равен: ', f)

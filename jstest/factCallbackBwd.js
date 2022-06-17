const numFact = 5
console.log('Вычисляем факториал числа: ', numFact)

let f = numFact;
const fact = (size) => {
    let count = size;
    if (size == 0) {
        return 1
    }
    if (count > 2) {
        count--      
        f = f * count
        console.log(count, '    ', f)                
        return (fact(count))         
    } else {
        return f        
    }   
}
console.log('Фактериал числа: ', numFact, 'равен: ', fact(numFact))

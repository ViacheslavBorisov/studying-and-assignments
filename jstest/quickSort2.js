const arr = [12, 64, 152, 77, 3, 21, 875, 1, 22]

const qSort = (arr) => {
    if (arr.length < 2) {
        return(arr)
    } else {
        const markElem = arr[Math.floor(Math.random() * arr.length)]
        const less = arr.filter(value => value < markElem)
        const more = arr.filter(value => value > markElem)
        return [...qSort(less), markElem, ...qSort(more)]
    }      
}

console.log(qSort(arr))
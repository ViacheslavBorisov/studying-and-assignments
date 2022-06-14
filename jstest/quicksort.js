const arr = [12, 64, 152, 77, 3, 21, 875, 1, 22]

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    } else {
        const baseItem = arr[Math.floor(Math.random())*arr.length]
        const less = arr.filter(value => value < baseItem)
        const more = arr.filter(value => value > baseItem)
        return [...quickSort(less), baseItem, ...quickSort(more)] 
    }
   
}

console.log(quickSort(arr))
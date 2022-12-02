function biggestNum (array){;
 let bigNum = 0;
 for (let key in array) {
    if (array[bigNum] < array[key]){
        bigNum = key;
    }
 }
 return bigNum
}
console.log(biggestNum([2, 3, 6, 7, 10, 1]));
function smallNum (array){
let smallestNum = 0;
for (const key in array) {
    if (array[smallestNum] > array[key]){
        smallestNum = key
    }
}
return smallestNum
};
console.log(smallNum([2, 4, 6, 7, 10, 0, -3]));
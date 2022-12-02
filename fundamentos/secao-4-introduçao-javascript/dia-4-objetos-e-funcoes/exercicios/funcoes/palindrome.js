function palindrome (str){
    let splitString = str.split("").reverse().join("");
    return str === splitString ? true : false;
}

console.log(palindrome("vasco"))
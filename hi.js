// add section

let arrlist =  [];
function  add (item){
    arrlist.push(item)
}
add ("apple")
add ("banana")
add ("grapes")

console.log(arrlist)

// remove section
function remove (item){
    const index = arrlist.indexOf(item);
        arrlist.splice(index, 1);
}
remove("")
console.log(arrlist)


// chart section
function lastChar(str) {
   return str.charAt(str.length - 1);
}
console.log(lastChar('JavaScript'));


// reverse section
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('typeScript'));

// again reverse
console.log(reverse(reverse('typeScript')));
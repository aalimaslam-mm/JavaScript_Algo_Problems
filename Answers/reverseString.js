function reverseString(str) {
    return str.split("").reverse().join("")
}

function returnReverse(str) {
    let s = ''
    for (let i = str.length; i >= 0; i--) {
        s += str.charAt(i)
    }
    console.log(s)
}

returnReverse("hello")
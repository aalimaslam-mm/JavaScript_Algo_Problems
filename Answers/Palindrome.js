function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}
// Example usage:
console.log(isPalindrome('racecar')); // Output: true

function isPalindrome2(str) {
    let reversed = str.split('').reverse().join('')
    return str.toLowerCase().trim() === reversed.toLowerCase().trim()
}


console.log(isPalindrome2(' rACecAR ')); // Output: true
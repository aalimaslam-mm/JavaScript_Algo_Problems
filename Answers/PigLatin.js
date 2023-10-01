function pigLatin(str) {
    return str
        .replace(/^([aeiouy])(.*)/, '$1$2way')
        .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}


console.log(pigLatin('ove'));
console.log(pigLatin('ove'));
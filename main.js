const str = `
010-1234-5678
thesecon@gmail.com
https://www.inha.ac.kr
my name is ssunny
abbcccdddd
`;

//const regexp = new RegExp("name", "gi");
const regexp = /name/gi;
console.log(regexp.test(str));
console.log(str.replace(regexp, "AAA"));

const regexp2 = /is/g;
console.log(str.match(regexp2));

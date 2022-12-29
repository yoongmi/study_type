//boolean
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

//number
let decimal: number = 5; //10진수
let hex: number = 0xf00d; //16진수
let binary: number = 0b1010; //2진수
let octal: number = 0o744; //8진수
let notaNumber: number = NaN;
let underscoreNum: number = 1_000_000;

//string
let myName: string = "mark";
myName = "anna";
let fullName: string = "mark lee";
let age: number = 20;
let sentence: string = `hello, my name is ${myName}. i'll be ${age} years old next month.`;
console.log(sentence);

//symbol
console.log(Symbol("foo"));

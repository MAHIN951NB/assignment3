//-----problem1--------\\

var area = 800;
let result =area/2;
console.log(result);


//-----problem2------\\

var money = 10000;

if(money>=25000){
    console.log(Laptop);
}
else if(money>=10000){
    console.log(`Cycle`);
}
else{
    console.log(`chocolate`);
}

//-----problem3-------\\

var lastDay = 11;

for(let i=1; i<=lastDay; i++){
    if(i % 3 === 0){
        console.log(`${i}-medicine`);
    }
    else{
         console.log(`${i}-rest`);
    }
}

//-----problem4--------\\

var fileName = "pdfData.jpg";
if(fileName.startsWith("#") || fileName.endsWith("pdf") || fileName.endsWith("docx")){
    console.log(`Store`);
}
else{
    console.log(`Delete`);
}

//------problem5---------\\

var student ={
    name: "jhankar",
    roll: 1014,
    department: "cse"
};
const info = Object.values(student);
console.log(info);
let str = info.join("");
console.log(str.concat("@ph.ac.bd"));

//-------problem6---------\\
var experience = 30;
var startingSalary = 45000;

let calculate = Math.pow(1.05, 30);

console.log((calculate*45000).toFixed(2));


const para = document.createElement("p")
console.log(para);

const altPara = para.innerHTML = "I want to do skydiving";

const list = document.querySelector('.list');
list.append(altPara)
console.log(list) 


var btn = document.createElement('button');
var t = document.createTextNode('click me');
btn.appendChild(t);
document.body.appendChild(btn);

button.style.color = 'blue';

let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("div");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
console.log(div, rect);
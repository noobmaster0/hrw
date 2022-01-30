let elements, html = [], css = [];
const C = (tag,data) => css[css.length]=`${tag}{${data}}`;
const H = (tag,data,properties="") => html[html.length]=`<${tag} ${properties}>${data}</${tag}>`;
const write = (Hid="main",Sid="script",Cid="style") => {
document.getElementById(Hid).innerHTML = html.join("");
document.getElementById(Cid).innerHTML = css.join("");
html = [],css = [];
};
let speed = 1000;
function run(){
elements();	
setInterval(elements,speed);
}
window.onload = run;

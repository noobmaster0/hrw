let elements, html = [], css = [], speed = 0;
const CSS = (tag,data) => css[css.length]=`${tag}{${data}}`;
const HTM = (tag,data,properties="") => html[html.length]=`<${tag} ${properties}>${data}</${tag}>`;
const write = (Hid="main",Cid="style") => {
document.getElementById(Hid).innerHTML = html.join("");
document.getElementById(Cid).innerHTML = css.join("");
html = [],css = [];
};
function run(){
elements();	
if(speed!=0){
setInterval(elements,speed);
}
}
window.onload = run;

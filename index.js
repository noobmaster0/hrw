let html = [], css = [];
const CSS = (tag,data) => css[css.length]=`${tag}{${data}}`;
const HTM = (tag,data,properties="") => html[html.length]=`<${tag} ${properties}>${data}</${tag}>`;
const write = (funct,Hid="main",Cid="style") => {
funct();
document.getElementById(Hid).innerHTML = html.join("");
document.getElementById(Cid).innerHTML = css.join("");
html = [],css = [];
};

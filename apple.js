//响应式导航栏的“=”点击事件
const menuIcon = document.querySelector(".menu-icon");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("active");/*toggle 第一次展开，第二次收缩*/
};


document.querySelector(".narrow").addEventListener("click",dianJi);
function dianJi() {
    if (document.getElementById("ax-2").style.display == "inline") {
        document.getElementById("ax-2").style.display = "none";
    } else if (document.getElementById("ax-2").style.display == "none") {
        document.getElementById("ax-2").style.display = "inline";
    }
}


//购物袋点击事件
document.querySelector(".tubiao-2").addEventListener("click", dianJi);
function dianJi() {
    if (document.getElementById("x").style.display == "none") {
        document.getElementById("x").style.display = "inline";
    }else if (document.getElementById("x").style.display == "inline") {
        document.getElementById("x").style.display = "none";
    }
}
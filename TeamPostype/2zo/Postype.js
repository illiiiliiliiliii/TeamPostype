const searchbox = document.querySelector("[name=searchbox]"); 
searchbox.addEventListener("click",function(){
    this.style.backgroundColor="white";
});

searchbox.addEventListener("mouseleave",function(){
    this.style.backgroundColor="rgb(244, 243, 243)";
});
const tab =document.querySelectorAll(".HRN>div");
tab[0].addEventListener("click",function(){
    tab[1].style.borderBottom="none"
    tab[2].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});

tab[1].addEventListener("click",function(){
    tab[0].style.borderBottom="none";
    tab[2].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});

tab[2].addEventListener("click",function(){
    tab[0].style.borderBottom="none"
    tab[1].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});
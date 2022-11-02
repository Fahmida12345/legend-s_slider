const imgLoader = document.getElementById("imgLoader");
const leftBTN = document.getElementById("leftBTN");
const righttBTN = document.getElementById("righttBTN");

position = 0;
let friendsIMG = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
    "img-7.jpg",
    "img-8.jpg",
    "img-9.jpg",
    "img-10.jpg",

]

let count = friendsIMG.length;
// console.log(count)

rightBTN.addEventListener("click",() => {
    position++ ;
    console.log(position);

    if(position==count){
        position= 0;
    }
    imgLoader.src =`./legends/${friendsIMG[position]}`;
})

leftBTN.addEventListener("click",()=>{
    position-- ;
    console.log(position);

    if(position < 0){
        position= count-1;
    }
    imgLoader.src =`./legends/${friendsIMG[position]}`;
})
window.onload =() =>{
    imgLoader.src= `./legends/${friendsIMG[0]}`
}
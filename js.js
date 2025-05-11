let memes = ["img/единоножка.jpg"];

document.addEventListener("click", () => {
    if (Math.random() < 0.2) {
        Mem();
        Armatura();
    }
});

function Mem(){
    let img = new Image();
    img.src = memes[Math.floor(Math.random()*memes.length)];
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100vw";
    img.style.height = "100vh";
    img.style.objectFit = "cover";
    img.style.zIndex = "100"; 

    document.body.prepend(img);
    setTimeout(() => {
        img.remove();
    }, 2000);
}
function Armatura(){
    let audio = new Audio("sounds/Арматура.mp3")
    audio.play();
}

function doAPrimeNumber(){
    let n = +document.getElementById("userInput").value;
    let numbers = [];
    outer: for(let i = 2; i<=n; i++){
        for(let j = 2; j<i; j++){
            if(i%j == 0)continue outer;
        }
        numbers.push(i);
    }
    console.log(numbers)
}

function powNumber(){
    let input = document.getElementById("userInput").value;
    let [a, b] = input.split(" ").map(Number);
    let result = Math.pow(a, b);
    console.log(result)
}

function arrayWithRandomNumbersAndSum(){
    let countNumb = document.getElementById("userInput").value;
    let Numb = [];
    let sum = 0;
    for(let i = 0; i < countNumb; i++){
        let randomNumb = Math.ceil(Math.random() * 100);
        Numb.push(randomNumb);
        sum += randomNumb;
    }
    console.log(Numb.join(", "));
    console.log(Numb.reduce((sum, number) => sum + number));
    document.body.style.background = 'cyan';
    console.log(document.body.childNodes);
    console.log(document.hasChildNodes());
}

function ChangeTextColor(){
    let elem = document.getElementsByClassName("div1");
    elem[0].style.color=`rgb(${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)})`;
}

function ChangeShape(){
    let elem = document.getElementsByClassName("div2");
    if(elem[0].style.borderRadius == "0px"){
        elem[0].style.borderRadius = "10px";
    } else{
        elem[0].style.borderRadius = "0px"
    }
}

function ChangeBodyBackground(){
    let elem = document.body;
    let x = Math.ceil(Math.random()*10);
    let colors = [];
    for(let i = 0; i < x; i++){
        let r = Math.ceil(Math.random()*255);
        let g = Math.ceil(Math.random()*255);
        let b = Math.ceil(Math.random()*255);
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }
    elem.style.backgroundImage = `linear-gradient(180deg, ${colors.join(", ")})`;
}

function ChangeBlockBackground(){
    let elem = document.getElementsByClassName("div4");
    elem[0].style.backgroundColor=`rgb(${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)})`;
}

function ChangeFontFamily(){
    let fonts = [
        "Arial", "Arial Black", "Verdana", "Tahoma", "Trebuchet MS",
        "Georgia", "Times New Roman", "Courier New", "Lucida Console", 
        "Comic Sans MS", "Impact", "Segoe UI", "Roboto", "Open Sans",
        "Lato", "Helvetica", "Helvetica Neue", "Consolas", "Palatino", 
        "Garamond", "Book Antiqua", "Futura", "Century Gothic", "Baskerville", 
        "Avenir", "Merryweather", "Droid Sans", "Ubuntu", "PT Sans", "Noto Sans", 
        "Raleway", "Montserrat", "Exo", "Poppins", "Lora", "Source Sans Pro", 
        "Roboto Slab", "Muli", "Bebas Neue"
    ];
    let elem = document.getElementsByClassName("div5");
    elem[0].style.fontFamily = `${fonts[Math.floor(Math.random()*fonts.length)]}`;
}
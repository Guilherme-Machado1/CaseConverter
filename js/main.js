const getText = document.querySelector('#text');
// const form = document.querySelector('#form');
function LowerCase(){
    let getValue = getText.value
    let textLowerCase = getValue.toLowerCase();
    getText.value = textLowerCase
}

function UpperCase(){
    let getValue = getText.value
    let textUpperCase = getValue.toUpperCase();
    getText.value = textUpperCase
}

function alternated(){
    let getValue = getText.value;
    let guarda = '';
    for (let i = 0; i < getValue.length; i++) {
        
        if(i % 2 !== 0){
            if(getValue[i] === getValue[i].toUpperCase()){
                guarda += getValue[i].toLowerCase();
                continue;
            }
            if(getValue[i] === getValue[i].toLowerCase()){
                guarda += getValue[i].toUpperCase();
                continue;
            }
        }
        guarda += getValue[i];
    }
    getText.value = guarda;
}

function Invert(){
    let getValue = getText.value;
    let split = Array.from(getValue);
    split = split.reverse();
    split = split.join("", ",");
    getText.value = split;
}

function DarkMode(){
    const body = document.querySelector("#body");
    const textarea = document.querySelector("#text");
    const h1 = document.querySelector(".h1");
    h1.classList.toggle("darkmode");
    textarea.classList.toggle("darkmode")
    body.classList.toggle("darkmode");

}

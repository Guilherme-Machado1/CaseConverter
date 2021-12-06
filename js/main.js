const getText = document.querySelector('#text');
let getValue = '';
let textLowerCase = '';
let textUpperCase = ''
let store = '';
let split = '';

function LowerCase(){
    getValue = getText.value
    textLowerCase = getValue.toLowerCase();
    getText.value = textLowerCase
}

function UpperCase(){
    getValue = getText.value
    textUpperCase = getValue.toUpperCase();
    getText.value = textUpperCase
}

function alternated(){
    getValue = getText.value;
    store = '';
    for (let i = 0; i < getValue.length; i++) {
        
        if(i % 2 !== 0){
            if(getValue[i] === getValue[i].toUpperCase()){
                store += getValue[i].toLowerCase();
                continue;
            }
            if(getValue[i] === getValue[i].toLowerCase()){
                store += getValue[i].toUpperCase();
                continue;
            }
        }
        store += getValue[i];
    }
    getText.value = store;
}

function Invert(){
    getValue = getText.value;
    split = Array.from(getValue);
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



const Sil = () => {
    document.getElementById("giris").value = "";
    localStorage.clear();
    document.getElementById("giris").placeholder = 0;
    click();
}
function Numbers(btnElement){
    if(btnElement.textContent === '.' && this.document.getElementById("giris").value.includes('.'))return
    document.getElementById("giris").value = document.getElementById("giris").value + btnElement.textContent;
    click();
}

const c = () => {
    click();
    var str = document.getElementById("giris").value;
    var a = str.split("");
    a.pop();
    var s = a;
    document.getElementById("giris").value = s.join("");
}
const ce = () => {
    click();
    document.getElementById("giris").value = "";
}



function click(){
    var audio = new Audio("data:audio/wav;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    audio.play();
    
}

function operand(oprEle){
    click();
    const prevVal = document.getElementById("giris").value;
    const currentVal = document.getElementById("giris").value;
    var setLocalStorage = localStorage.setItem("prevVal", prevVal);
    document.getElementById("giris").setAttribute("placeholder", 0);
    document.getElementById("giris").value = '';

    if(localStorage.getItem("prevVal") === ""){
        localStorage.setItem("prevVal",localStorage.getItem("sonuc"));
    }
    
    
    if(oprEle.textContent === '+'){
        var toplam = localStorage.setItem("toplam",true);
        var çarpma = localStorage.setItem("çarpma",false);
        var çıkarma = localStorage.setItem("çıkarma",false);
        var bölme = localStorage.setItem("bölme",false);
        var mod = localStorage.setItem("mod",false);

    }
    else if(oprEle.textContent === '−'){
        var toplam = localStorage.setItem("toplam",false);
        var çarpma = localStorage.setItem("çarpma",false);
        var çıkarma = localStorage.setItem("çıkarma",true);
        var bölme = localStorage.setItem("bölme",false);
        var mod = localStorage.setItem("mod",false);

    }
    else if(oprEle.textContent === 'x'){
        var toplam = localStorage.setItem("toplam",false);
        var çarpma = localStorage.setItem("çarpma",true);
        var çıkarma = localStorage.setItem("çıkarma",false);
        var bölme = localStorage.setItem("bölme",false);
        var mod = localStorage.setItem("mod",false);


    }
    else if(oprEle.textContent === '÷'){
        var toplam = localStorage.setItem("toplam",false);
        var çarpma = localStorage.setItem("çarpma",false);
        var çıkarma = localStorage.setItem("çıkarma",false);
        var bölme = localStorage.setItem("bölme",true);
        var mod = localStorage.setItem("mod",false);

    }
    else if(oprEle.textContent === '%'){
        var toplam = localStorage.setItem("toplam",false);
        var çarpma = localStorage.setItem("çarpma",false);
        var çıkarma = localStorage.setItem("çıkarma",false);
        var bölme = localStorage.setItem("bölme",false);
        var mod = localStorage.setItem("mod",true);

    }
    
}
function işlemfonksiyonu(işlem){
    click();
    if(document.getElementById("giris").value === ""){
       document.getElementById("giris").value = localStorage.getItem("sonuc");
    }

    if(işlem.textContent === '1/X'){
        document.getElementById("giris").setAttribute("placeholder",1/(document.getElementById("giris").value));
        localStorage.setItem("sonuc",1/(document.getElementById("giris").value));
        document.getElementById("giris").value = "";
        
    }
    else if(işlem.textContent === 'x2'){
        document.getElementById("giris").setAttribute("placeholder",(document.getElementById("giris").value)*(document.getElementById("giris").value));
        localStorage.setItem("sonuc",(document.getElementById("giris").value)*(document.getElementById("giris").value));
        document.getElementById("giris").value = "";
    }
    else if(işlem.textContent === '√x'){
        document.getElementById("giris").setAttribute("placeholder",Math.sqrt(document.getElementById("giris").value));
        localStorage.setItem("sonuc",Math.sqrt(document.getElementById("giris").value));
        document.getElementById("giris").value = "";
        if(localStorage.getItem("sonuc") === "NaN"){
            document.getElementById("giris").setAttribute("placeholder",'GEÇERSİZ GİRİŞ');
            document.getElementById("giris").value = "";
        }
    }
    else if(işlem.textContent === '+/-'){
        if(document.getElementById("giris").value.includes("-")){
            document.getElementById("giris").value = document.getElementById("giris").value.substring(1);
            document.getElementById("giris").value = "+" + document.getElementById("giris").value;
        }
        else{
            if(document.getElementById("giris").value.includes("+")){
                document.getElementById("giris").value = document.getElementById("giris").value.substring(1);
            }
            document.getElementById("giris").value = "-" + document.getElementById("giris").value;
            
        }
    }
        

}


function Hesapla(){
    click();
    const currentVal = document.getElementById("giris").value;
    var setLocalStorage = localStorage.setItem("currentVal", currentVal);
    var x = parseFloat(localStorage.getItem("prevVal"));
    var y = parseFloat(localStorage.getItem("currentVal"));
    if(localStorage.getItem("toplam") === "true"){
        document.getElementById("giris").value = "";
        document.getElementById("giris").setAttribute("placeholder", x+y);
        localStorage.setItem("sonuc", x+y);
        
    }
    else if(localStorage.getItem("çıkarma") === "true"){
        document.getElementById("giris").value = "";
        document.getElementById("giris").setAttribute("placeholder", x-y);
        localStorage.setItem("sonuc", x-y);
    }
    else if(localStorage.getItem("çarpma") === "true"){
        document.getElementById("giris").value = "";
        document.getElementById("giris").setAttribute("placeholder", x*y);
        localStorage.setItem("sonuc", x*y);
    }
    else if(localStorage.getItem("bölme") === "true"){
        document.getElementById("giris").value = "";
        document.getElementById("giris").setAttribute("placeholder", x/y);
        localStorage.setItem("sonuc", x/y);
    }
    else if(localStorage.getItem("mod") === "true"){
        document.getElementById("giris").value = "";
        document.getElementById("giris").setAttribute("placeholder", x%y);
        localStorage.setItem("sonuc", x%y);
    }
    if(localStorage.getItem("sonuc") === "NaN"){
        document.getElementById("giris").setAttribute("placeholder",'GEÇERSİZ GİRİŞ');
        document.getElementById("giris").value = "";
    }
}









const sizer = () => {
if (window.innerWidth <= 500) {
        document.getElementById("giris").maxLength = "8";
}
else if (window.innerWidth <= 768) {
    document.getElementById("giris").maxLength = "16";
}
else if (window.innerWidth >= 768){
    document.getElementById("giris").maxLength = "32";
}
}
setInterval(sizer,100)
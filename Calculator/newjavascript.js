var str='';
function first(){
    str=str+'1';
    document.getElementById("top").innerHTML = str;
}
function second(){
    str=str+'2';
    document.getElementById("top").innerHTML = str;
}

function trzy(){
    str=str+'3';
    document.getElementById("top").innerHTML = str;
}
function cztery(){
    str=str+'4';
    document.getElementById("top").innerHTML = str;
}
function piec(){
    str=str+'5';
    document.getElementById("top").innerHTML = str;
}
function szesc(){
    str=str+'6';
    document.getElementById("top").innerHTML = str;
}
function siedem(){
    str=str+'7';
    document.getElementById("top").innerHTML = str;
}
function osiem(){
    str=str+'8';
    document.getElementById("top").innerHTML = str;
}
function dziewiec(){
    str=str+'9';
    document.getElementById("top").innerHTML = str;
}
function zeroo(){
    str=str+'0';
    document.getElementById("top").innerHTML = str;
}
function clear(){
    
}
function plus(){
    str=str+'+';
    document.getElementById("top").innerHTML = str;
}
function minus(){
    str=str+'-';
    document.getElementById("top").innerHTML = str;
}
function mnoz(){
    str=str+'*';
    document.getElementById("top").innerHTML = str;
}
function dziel(){
    str=str+'/';
    document.getElementById("top").innerHTML = str;
}
function equals(){
    str1=eval(str);
    document.getElementById("top").innerHTML = str1;
}

/* function first(){
    var x0 = document.getElementById("0").value;  
    var x1 = document.getElementById("1").value;   
    var x2 = document.getElementById("2").value;   
    var x3 = document.getElementById("3").value;
    var x4 = document.getElementById("4").value;
    var x5 = document.getElementById("5").value;
    var x6 = document.getElementById("6").value;
    var x7 = document.getElementById("7").value;
    var x8 = document.getElementById("8").value;
    var x9 = document.getElementById("9").value;
    var xp = document.getElementById("plus").value;
    var xm = document.getElementById("minus").value;
    var xd = document.getElementById("dziel").value;
    var xmn = document.getElementById("mnoz").value;
    var xc = document.getElementById("clear").value;
    var xe = document.getElementById("equals").value;
    
    var oper=[x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,xp,xm,xd,xmn,xc,xe];
    
    var str;
    for (var i = 0; i < 18; i++) { 
        switch(oper){
            case x0:
                str=str+x0;
                document.getElementById("top").innerHTML = str;
            case x1:
                str=str+x1;
                document.getElementById("top").innerHTML = str;
            case x2:
                str=str+x2;
                document.getElementById("top").innerHTML = str;
            case x3:
                str=str+x3;
                document.getElementById("top").innerHTML = str;
            case x4:
                str=str+x4;
                document.getElementById("top").innerHTML = str;
            case x5:
                str=str+x5;
                document.getElementById("top").innerHTML = str;
            case x6:
                str=str+x6;
                document.getElementById("top").innerHTML = str;
            case x7:
                str=str+x7;
                document.getElementById("top").innerHTML = str;
            case x8:
                str=str+x8;
                document.getElementById("top").innerHTML = str;
            case x9:
                str=str+x9;
                document.getElementById("top").innerHTML = str;
            case xp:
                str=str+xp;
                document.getElementById("top").innerHTML = str;
            case xm:
                str=str+xm;
                document.getElementById("top").innerHTML = str;
            case xd:
                str=str+xd;
                document.getElementById("top").innerHTML = str;
            case xmn:
                str=str+xmn;
                document.getElementById("top").innerHTML = str;
            case xc:
                str='';
                document.getElementById("top").innerHTML = str;
            case xe:
                 var strW=eval(str);
                document.getElementById("top").innerHTML = strW;
        }
    }
}
*/
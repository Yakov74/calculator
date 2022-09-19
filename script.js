// //simple calculator1//
// function showAlert(){
//     alert('This is alert calculator!');
// }
// function doCalculation(){
//     var n1,n2;
//     n1=parseFloat(document.getElementById('firstnum').value);
//     n2=parseFloat(document.getElementById('secondnum').value);
//     alert (n1+n2);
// }

// simple calculator2//
function add(a,b){
    return a+b;
}

function buttonPlusClick(){
   let addResult = add(+x.value,+y.value);
   result.value=addResult
}


plus.onclick=buttonPlusClick;

function sub(a,b){
    return a-b;
}
function buttonMinusClick(){
    let subResult =sub(x.value,y.value);
    result.value=subResult;
}
minus.onclick=buttonMinusClick;

function add(a,b){
    return a*b;
}

function buttonMultyClick(){
   let addResult = add(x.value,y.value);
   result.value=addResult
}


multy.onclick=buttonMultyClick;

function sub(a,b){
    return a/b;
}

function buttonDividClick(){
   let subResult = sub(x.value,y.value);
   result.value=subResult
}


divid.onclick=buttonDividClick;
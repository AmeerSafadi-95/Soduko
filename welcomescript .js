function letsplay(){
    if(document.getElementById('select').value=='Easy'){
    document.getElementById('play').innerHTML=window.location = "easy.html";
    }
    if(document.getElementById('select').value=='Medium'){
        document.getElementById('play').innerHTML=window.location = "Medium.html";
    }
    if(document.getElementById('select').value=='Hard'){
        document.getElementById('play').innerHTML=window.location = "Hard.html";
    }
}
function sudokurules(){
    document.getElementById('r1').innerHTML = window.location = 'rules.html' ;
}
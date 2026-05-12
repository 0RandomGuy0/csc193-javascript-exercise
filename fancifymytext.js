function alertFunc(){
    alert("Hello, world!");
}

function enlargeText(){
    document.getElementById("inputText").style.fontSize = "24pt";
}

function fancyText(){
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}

function boringText(){
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";
}

function mooText(){
    var text = document.getElementById("inputText").value;
    var mooedText = text.toUpperCase().split(".").join("-Moo.");
    
    document.getElementById("inputText").value = mooedText;
}
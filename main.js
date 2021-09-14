video = "";
check = "";
input = "";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(300,300);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("inpt").value;
}

function modelLoaded(){
    console.log("Model Is Loaded!");
    check = true;
}

function draw(){
    image(video, 0, 0, 300, 300);
}